// address
const config = require('../../../config/index.js')
const baseUrl = config.developConfig.host

Page({
  data: {
    address: null
  },
  onLoad() {
    const uuid = wx.getStorageSync('uuid')
    const address = wx.getStorageSync('address') || '中国-杭州'
    const that = this
    console.info(address)
    this.setData({
      address: address
    })
    // wx.request({
    //   url: `${baseUrl}/api/userInfo/address/${uuid}`,
    //   method: 'GET',
    //   success(res) {
    //     const data = res.data
    //     that.setData({
    //       address: data.result.address
    //     })
    //   }
    // })
  },
  onShow() {
    const address = wx.getStorageSync('address') || '中国-杭州'
    this.setData({
      address: address
    })
  },
  editAddress() {
    wx.navigateTo({
      url: '/pages/userInfo/address/edit',
    })
  }
})