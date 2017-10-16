// shopcart.js
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
Page({
  data: {
    shopcart: []
  },
  onShow() {
    const uuid = wx.getStorageSync('uuid')
    const that = this
    wx.request({
      url: `${baseUrl}/api/shopcart/${uuid}`,
      success(res) {
        if (res.data.success) {
          that.setData({
            shopcart: res.data.result.shopcart
          })
        }
      }
    })
  }
})