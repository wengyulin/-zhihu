var util=require('../../utils/util.js')
var app=getApp()
Page({
  data:{
    motto:'Hello World',
    userInfo:{}
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '',
    })
  },
  onLoad:function(){
    console.log('onLoad')
    var that=this
    //调用应用实例的方法获取全局数据
   app.getUserInfo(function(userInfo){
     //更新数据
     console.log(userInfo)
     that.setData({
       userInfo:userInfo
     })
    })
  }
})




// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     //tetx:"这是一个页面"
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     //页面初始化  options为页面跳转所带来的参数
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
//     //页面渲染完成
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
//     //页面显示
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
//     //页面隐藏
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
//     //页面关闭
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
    
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
    
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
    
//   }
// })