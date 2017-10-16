// shopcart.js
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
Page({
  data: {
    shopcart: [],
    checkboxItems: [
      {name: 'standard is dealt for u.', value: '0', checked: true},
      {name: 'standard is dealicient for u.', value: '1'}
    ]
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

    const checkboxItems = this.data.checkboxItems, values = e.detail.value
    for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true
          break
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  }
})