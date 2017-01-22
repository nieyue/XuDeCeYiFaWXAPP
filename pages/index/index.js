//index.js
Page({
  data: {
     testHot:{},
      testList:[],
      hotTestList:[]
   
  },
  onLoad: function () {
    var _this=this;
    //testHot
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/all', 
  success: function(res) {
//    console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==1){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var testHot=JSON.parse(pl.data);
        testHot.img="https://ceyifa.fuwu88.cn"+testHot.img;
      _this.setData({    
      testHot:testHot 
       });
    }
  });
  break;
      }
    };
  }
});


// //爱情测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('爱情测试'), 
  method:'POST',
  success: function(res) {
   //console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
//console.log(test1)
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });
    }
  });


  break;
      }
    };
  }
});

//职场测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('职场测试'), 
  success: function(res) {
//    console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
//console.log(test1)
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });
    }
  });
  break;
      }
    };
  }
});

//星座测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('星座测试'), 
  success: function(res) {
 //   console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
//console.log(test1)
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });
    }
  });
  break;
      }
    };
  }
});
//财运测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('财运测试'), 
  success: function(res) {
    //console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
//console.log(test1)
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });
    }
  });
  break;
      }
    };
  }
});
 //性格测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('性格测试'), 
  success: function(res) {
    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });
    }
  });
  break;
      }
    };
  }
});   
   //社交测试
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list/type?type='+encodeURIComponent('社交测试'), 
  success: function(res) {

    for (var i = 0; i < res.data.length; i++) {
      if(res.data[i].level==2){
  wx.request({
    url: 'https://ceyifa.fuwu88.cn/test/'+res.data[i].test_id+'/all',
    success:function(pl){
      var test1=JSON.parse(pl.data);
        test1.img="https://ceyifa.fuwu88.cn"+test1.img;
      var testListTemp=_this.data.testList;
      testListTemp.push(test1);
       _this.setData({    
       testList:testListTemp 
        });

    }
  });
  break;
      }
    };
  }
});

   //热门推荐
wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list?pageNum=1&pageSize=5&orderName=update_date&orderWay=desc', 
  // header: {
  //     'content-type': 'application/json'
  // },
  success: function(res) {
    //console.log(res.data)
    for (var i = 0; i < res.data.length; i++) {
      res.data[i].img="https://ceyifa.fuwu88.cn"+res.data[i].img;
    };
    _this.setData({    
       hotTestList:res.data,
       pageNum:1,
       pageSize:5
        });
   // console.log(_this.data.hotTestList)
  }
});
  },
   onShareAppMessage: function () {
    return {
      title: '测壹发',
      desc: '爱情、星座、社交、性格、财运、职场，每日测一发',
      path: '/pages/index/index'
    }
  },
  //下拉刷新
  onReachBottom:function(){
    var _this=this;
    console.log("d")
    wx.showNavigationBarLoading();
    var pageNum=_this.data.pageNum+_this.data.pageSize;
    var pageSize=_this.data.pageSize;
    wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/list?pageNum='+pageNum+'&pageSize='+pageSize+'&orderName=update_date&orderWay=desc', 
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

    var testListTemp=_this.data.hotTestList;
      testListTemp=testListTemp.concat(res.data);
       _this.setData({    
       hotTestList:testListTemp,
       pageNum:pageNum,
       pageSize:pageSize
        });

   // console.log(_this.data.hotTestList)
  }
});
    wx.hideNavigationBarLoading();
  }
})
