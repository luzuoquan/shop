// product
const baseUrl = 'http://192.168.1.114:3001'
const app = getApp()

Page({
	data: {
    product: {
      imageList: [
        { key: 1, url: '/assets/images/product-list-1.jpg' },
        { key: 2, url: '/assets/images/product-list-1.jpg' }
      ],
      productName: '麻辣火锅',
      description: '',
      inventory: '2%',
      price: 1500,
      freight: 0,
      distribution: '快递'
    },
    number: 1
  },
  addNumber() {
    this.setData({
      number: ++this.data.number
    })
  },
  reduceNumber() {
    this.setData({
      number: --this.data.number
    })
  },
  addShopcart() {
    const data = this.data
    const uuid = wx.getStorageSync('uuid')

    wx.request({
      url: `${baseUrl}/api/shopcart`,
      method: 'POST',
      data: {
        productId: data.product.productId,
        productAccount: data.number,
        thumbnails: data.product.imageList[0].url,
        uuid: uuid
      },
      success(res) {
        if(res.data.success) {
          wx.showToast({ title: '加入购物车成功' })
        }
      }
    })
  },
  onLoad(info) {
    const that = this
    wx.request({
      url: `${baseUrl}/api/product/${info.productId}`,
      success(res) {
        const imageList = res.data.result.imageUrl.split(',').map((item,inx) => ({key: inx, url: item}))
        that.setData({
          product: Object.assign({}, res.data.result, {imageList: imageList})
        })
      }
    })
  }
})
