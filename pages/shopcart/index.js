// shopcart.js
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
Page({
  data: {
    shopcart: [],
    allBuy: {
      checked: false,
      value: 'all'
    },
    totalMoney: 0
  },
  onShow() {
    const uuid = wx.getStorageSync('uuid')
    const that = this
    wx.request({
      url: `${baseUrl}/api/shopcart/${uuid}`,
      success(res) {
        if (res.data.success) {
          that.setData({
            shopcart: res.data.result.shopcart,
            allBuy: {
              checked: false,
              value: 'all'
            },
            totalMoney: 0
          })
        }
      }
    })
  },
  checkboxChange(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const shopcart = this.data.shopcart
    const values = e.detail.value
    let _totalMoney = 0

    for (let i = 0, lenI = shopcart.length; i < lenI; ++i) {
      shopcart[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (shopcart[i].productId == values[j]) {
          shopcart[i].checked = true
          break
        }
      }
    }

    shopcart.forEach(item => {
      if (item.checked) {
        _totalMoney += item.productAccount * item.product.price
      }
    })

    this.setData({
      allBuy: {
        checked: shopcart.every(item => item.checked),
        value: 'all'
      },
      shopcart: shopcart,
      totalMoney: _totalMoney
    })
  },
  allBuyCheck(e) {
    const values = e.detail.value
    const _allBuy = this.data.allBuy
    const shopcart = this.data.shopcart
    let _totalMoney = 0
    shopcart.forEach(item => item.checked = values[0] === 'all')

    if (values[0] === 'all') {
      shopcart.forEach(item => {
        _totalMoney += item.productAccount * item.product.price
      }) 
    } else {
      _totalMoney = 0
    }

    this.setData({
      allBuy: {
        checked: !_allBuy.checked,
        value: 'all'
      },
      shopcart: shopcart,
      totalMoney: _totalMoney
    })
  }
})