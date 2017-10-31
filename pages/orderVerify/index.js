// orderVerify
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
const app = getApp()

Page({
  data: {
    totalPrice: 0,
    amount: 0,
    address: null,
    product: []
  },
  onLoad() {
    const { productId, amount, productIds } = this.options
    const that = this
    const uuid = wx.getStorageSync('uuid')
    const shopcart = wx.getStorageSync('shopcart')

    if (productId) {
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
                product: [Object.assign({}, resolve.result, {amount: amount})],
                totalPrice: amount * resolve.result.price,
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
    } else {
      const product = shopcart.filter(item => productIds.split(',').indexOf(String(item.id)) > -1)
      wx.request({
        url: `${baseUrl}/api/userInfo/address/${uuid}`,
        method: 'GET',
        success(res) {
          const data = res.data
          let _totalPrice = 0

          product.forEach(item => {
            _totalPrice += item.productAccount * item.product.price
          })

          that.setData({
            product: product,
            totalPrice: _totalPrice,
            address: data.result.address
          })
        },
        fail() {
          wx.showModal({
            content: '网络请求异常',
            showCancel: false
          })
        }
      })
    }
  },
  payAction() {
    wx.showToast({ title: '支付尚在开发中' })
  }
})