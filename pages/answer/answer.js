
Page({    
  data:{
     
  },
  onLoad: function(options) {    
    var _this=this;
    wx.showNavigationBarLoading();
    this.setData({    
      test:{
        test_id: options.test_id
      } ,
    problem:{
        problem_id: options.problem_id
      } ,
    answer:{
        answer_id: options.answer_id
      } 
    });

wx.request({
  url: 'https://ceyifa.fuwu88.cn/test/'+_this.data.test.test_id+'/all', 
  // header: {
  //     'content-type': 'application/json'
  // },
  success: function(res) {
   // console.log(res.data)
    var test=JSON.parse(res.data);
    test.img="https://ceyifa.fuwu88.cn"+test.img;
    for (var i = 0; i < test.problemList.length; i++) {
      if(test.problemList[i].problem_id==_this.data.problem.problem_id){
           _this.setData({   
           problem:test.problemList[i]
            });
        for (var j = 0; j < test.problemList[i].answerList.length; j++) {
          test.problemList[i].answerList[j]
          if(test.problemList[i].answerList[j].answer_id==_this.data.answer.answer_id){
            _this.setData({   
           answer:test.problemList[i].answerList[j]
            });
          }
        };

      }
    };
     _this.setData({   
           test:test
       });
  //  console.log( _this.data.test.img)

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
      title: this.data.answer.name,
      desc: '爱情、星座、社交、性格、财运、职场，每日测一发',
      path: '/pages/answer/answer?test_id='+this.data.test.test_id+'&problem_id='+this.data.problem.problem_id+'&answer_id='+this.data.answer.answer_id
    }
  }
}) 