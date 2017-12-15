// pages/userInfo/address/edit.js
const config = require('../../../config/index.js')
const baseUrl = config.developConfig.host

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressValue: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  saveAddress() {
    const uuid = wx.getStorageSync('uuid')
    const data = this.data
    wx.setStorage({
      key: 'address',
      data: data.addressValue,
      success() {
        wx.showToast({ 
          title: '修改成功',
          success() {
            setTimeout(() => wx.navigateBack(1), 1000)
          }
        })
      }
    })
    // wx.request({
    //   url: `${baseUrl}/api/userInfo/address`,
    //   method: 'PUT',
    //   data: {
    //     uuid: uuid,
    //     address: data.addressValue
    //   },
    //   success(res) {
    //     if (res.data.success) {
    //       wx.showToast({ 
    //         title: '修改成功',
    //         success() {
    //           setTimeout(() => wx.navigateBack(1), 1000)
    //         }
    //       })
    //     }
    //   }
    // })
  },

  addressChange(e) {
    this.setData({
      addressValue: e.detail.value
    })
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