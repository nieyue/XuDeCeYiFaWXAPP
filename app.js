//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
   // wx.setStorageSync('logs', logs)
   wx.getNetworkType({
  success: function(res) {
    var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
  console.log(networkType)
  }
})
  },
  getUserInfo:function(cb){
    // var that = this
    // if(this.globalData.userInfo){
    //   typeof cb == "function" && cb(this.globalData.userInfo)
    // }else{
    //   //调用登录接口
    //   wx.login({
    //     success: function () {
    //       wx.getUserInfo({
    //         success: function (res) {
    //           that.globalData.userInfo = res.userInfo
    //           typeof cb == "function" && cb(that.globalData.userInfo)
    //         }
    //       })
    //     }
    //   })
    // }
  },
  globalData:{
    userInfo:null
  }
})