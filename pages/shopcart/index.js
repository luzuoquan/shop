// shopcart.js
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
Page({
  data: {
    shopcart: [],
    allBuy: {
      checked: false,
      value: 'all'
    }
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
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const shopcart = this.data.shopcart, values = e.detail.value

    for (let i = 0, lenI = shopcart.length; i < lenI; ++i) {
      shopcart[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (shopcart[i].productId == values[j]) {
          shopcart[i].checked = true
          break
        }
      }
    }

    this.setData({
      shopcart: shopcart
    })
  },
  allBuyCheck(e) {
    const values = e.detail.value
    const _allBuy = this.data.allBuy
    const shopcart = this.data.shopcart

    shopcart.forEach(item => item.checked = values[0] === 'all')

    this.setData({
      allBuy: {
        checked: !_allBuy.checked,
        value: 'all'
      },
      shopcart: shopcart
    })
  }
})