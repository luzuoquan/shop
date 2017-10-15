// index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    allOrderImage: '/assets/images/order.png',
    navigateImage: '/assets/images/right.png',
    needPayImage: '/assets/images/needpay.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('userInfo') || app.globalData.userInfo) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : app.globalData.userInfo
      })
    }
  },

  userInfoHandler: function(info) {
    if (info.detail.userInfo) {
      this.setData({
        userInfo: info.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})