// address
const config = require('../../../config/index.js')
const baseUrl = config.developConfig.host

Page({
  data: {
    address: null
  },
  onLoad() {
    const uuid = wx.getStorageSync('uuid')
    const that = this
    wx.request({
      url: `${baseUrl}/api/userInfo/address/${uuid}`,
      method: 'GET',
      success(res) {
        const data = res.data
        that.setData({
          address: data.result.address
        })
      }
    })
  },
  editAddress() {
    wx.navigateTo({
      url: '/pages/userInfo/address/edit',
    })
  }
})