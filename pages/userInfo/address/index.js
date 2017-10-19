// address
Page({
  data: {

  },
  onLoad() {

  },
  editAddress() {
    console.info(321)
    wx.navigateTo({
      url: '/pages/userInfo/address/edit',
    })
  }
})