// product
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
const localData = require('../../mock-data/product')
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
    const shopcart = wx.getStorageSync('shopcart') || []
    if (shopcart.length > 0) {
      if (shopcart.filter(item => item.productId === data.product.productId).length > 0) {
        shopcart.forEach(item => {
          if (item.productId === data.product.productId) {
            item.productAccount += data.number
          }
        })
      } else {
        shopcart.push({
          productId: data.product.productId,
          productAccount: data.number,
          thumbnails: data.product.imageList[0].url,
          price: data.product.price
        })
      }
    } else {
      shopcart.push({
        productId: data.product.productId,
        productAccount: data.number,
        thumbnails: data.product.imageList[0].url,
        price: data.product.price
      })
    }
    wx.setStorage({
      key: 'shopcart',
      data: shopcart,
      success() {
        wx.showToast({ title: '加入购物车成功' })
      }
    })
    // wx.request({
    //   url: `${baseUrl}/api/shopcart`,
    //   method: 'POST',
    //   data: {
    //     productId: data.product.productId,
    //     productAccount: data.number,
    //     thumbnails: data.product.imageList[0].url,
    //     uuid: uuid
    //   },
    //   success(res) {
    //     if(res.data.success) {
    //       wx.showToast({ title: '加入购物车成功' })
    //     }
    //   }
    // })
  },
  onLoad(info) {
    const that = this
    // 12-15版本
    const product = localData.products.filter(item => item.productId === info.productId)[0]
    const imageList = product.src.split(',').map((item,inx) => ({key: inx, url: item}))
    that.setData({
      product: Object.assign({}, product, {imageList: imageList})
    })
    
    // wx.request({
    //   url: `${baseUrl}/api/product/${info.productId}`,
    //   success(res) {
    //     const imageList = res.data.result.imageUrl.split(',').map((item,inx) => ({key: inx, url: item}))
    //     that.setData({
    //       product: Object.assign({}, res.data.result, {imageList: imageList})
    //     })
    //   }
    // })
  },
  pruchase() {
    // console.info(this.data.product)
    const data = this.data
    wx.navigateTo({
      url: `/pages/orderVerify/index?productId=${data.product.productId}&amount=${data.number}`
    })
  }
})
