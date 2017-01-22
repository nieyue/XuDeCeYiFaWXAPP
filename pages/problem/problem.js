
Page({    
  data:{
   
  },
  onLoad: function(options) {  
  var _this=this;  
    wx.showNavigationBarLoading();
    this.setData({    
      test:{
        test_id: options.test_id},
        problem:{
        problem_id:options.problem_id,
        order_number:options.order_number
        }
    });

wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/'+_this.data.test.test_id+'/all', 
  // header: {
  //     'content-type': 'application/json'
  // },
  success: function(res) {
   // console.log(res.data)
   // console.log(_this.data.problem.problem_id)
   // console.log(_this.data.problem.order_number)
    var test=JSON.parse(res.data);
    test.img="https://ceyifa.fuwu88.cn"+test.img;
    //直接跳转到问题，开始测试
    if(_this.data.problem.problem_id){
    for (var i = 0; i < test.problemList.length; i++) {
      if(test.problemList[i].problem_id==_this.data.problem.problem_id){
           _this.setData({   
           problem:test.problemList[i]
            });
    //console.log( _this.data.problem)
      }
    };
    }else if(_this.data.problem.order_number){
      //测试题目进行中
      for (var i = 0; i < test.problemList.length; i++) {
      if(test.problemList[i].order_number==_this.data.problem.order_number){
           _this.setData({   
           problem:test.problemList[i]
            });
   // console.log( _this.data.problem)
      }
    };
    }else if(!_this.data.problem.problem_id&&!_this.data.problem.order_number){
      //如果没有problem_id也没有order_number，则默认为第一个
       _this.setData({   
           problem:test.problemList[0]
            });
    }

     _this.setData({   
           test:test
       });

        //设置顶部名称
   wx.setNavigationBarTitle({
  title: _this.data.test.title
});

  }
});

   wx.hideNavigationBarLoading();
  },
  onShareAppMessage: function () {
    return {
      title: this.data.test.title,
      desc: '爱情、星座、社交、性格、财运、职场，每日测一发',
      path: '/pages/problem/problem?test_id='+this.data.test.test_id+'&problem_id='+this.data.problem.problem_id
    }
  }
}) 