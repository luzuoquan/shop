// shopcart.js
const baseUrl = 'http://192.168.1.114:3001'
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