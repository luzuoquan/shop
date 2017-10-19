// orderVerify
Page({
  data: {
    totalPrice: 0
  },
  onLoad() {
    console.info(this.options.productId)
  },
  payAction() {
    wx.showToast({ title: '支付尚在开发中' })
  }
})