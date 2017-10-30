// orderVerify
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
const app = getApp()

Page({
  data: {
    totalPrice: 0,
    amount: 0,
    address: null,
    product: {}
  },
  onLoad() {
    const { productId, amount } = this.options
    const that = this
    const uuid = wx.getStorageSync('uuid')
    new Promise((resolve, reject) => {
      wx.request({
        url: `${baseUrl}/api/product/${productId}`,
        method: 'GET',
        success(res) {
          const data = res.data
          resolve(data)
        },
        fail() {
          reject()
        }
      })
    })
      .then(resolve => {
        wx.request({
          url: `${baseUrl}/api/userInfo/address/${uuid}`,
          method: 'GET',
          success(res) {
            const data = res.data
            that.setData({
              product: resolve.result,
              amount: amount,
              address: data.result.address
            })
          },
          fail() {
            reject()
          }
        })
      })
      .catch(() => {
        wx.showModal({
          content: '网络请求异常',
          showCancel: false
        })
      })
  },
  payAction() {
    wx.showToast({ title: '支付尚在开发中' })
  }
})