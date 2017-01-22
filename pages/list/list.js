
Page({    
  data:{
    testList:[]
  },
  onLoad: function(options) { 
  var _this=this;   
    wx.showNavigationBarLoading();
    this.setData({    
      test_type: options.test_type    
    });

    //根据类型查询列表
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?pageNum=1&pageSize=20&type='+encodeURIComponent(_this.data.test_type), 
  success: function(res) {
    for (var i = 0; i < res.data.length; i++) {
        res.data[i].img="https://ceyifa.fuwu88.cn"+res.data[i].img;
    };
       _this.setData({    
       testList:res.data,
       pageNum:1,
       pageSize:20
        });
  }
});

    //设置顶部名称
   wx.setNavigationBarTitle({
  title: this.data.test_type
});
   wx.hideNavigationBarLoading();
  },
  onShareAppMessage: function () {
    return {
      title: test_type,
      desc: '爱情、星座、社交、性格、财运、职场，每日测一发',
      path: '/pages/list/list?grids_type='+grids_type
    }
  } ,
  //下拉刷新
  onReachBottom:function(){
    var _this=this;
    wx.showNavigationBarLoading();
    var pageNum=_this.data.pageNum+_this.data.pageSize;
    var pageSize=_this.data.pageSize;
    wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?pageNum='+pageNum+'&pageSize='+pageSize+'&orderName=update_date&orderWay=desc&type='+encodeURIComponent(_this.data.test_type), 
  // header: {
  //     'content-type': 'application/json'
  // },
  success: function(res) {
    //console.log(res.data)
    if(res.data.length<=0){
      return;
    }
    for (var i = 0; i < res.data.length; i++) {
      res.data[i].img="https://ceyifa.fuwu88.cn"+res.data[i].img;
    };

    var testListTemp=_this.data.testList;
      testListTemp=testListTemp.concat(res.data);
       _this.setData({    
       testList:testListTemp,
       pageNum:pageNum,
       pageSize:pageSize
        });

   // console.log(_this.data.hotTestList)
  }
});
    wx.hideNavigationBarLoading();
  }
}) 