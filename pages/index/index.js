// index
const config = require('../../config/index.js')
const localData = require('../../mock-data/product')
const baseUrl = config.developConfig.host
Page({
	data: {
		name: 'Fedora123',
    logoUrl: '/assets/images/m_logo.jpg',
    imgUrls: [
      {key: 1, src: '/assets/images/image-1.jpeg'},
      {key: 2, src: '/assets/images/image-2.jpeg'},
      {key: 3, src: '/assets/images/image-3.jpeg'}
    ],
    products: [
      {
        productId: '000001',
        key: 1,
        src: '/assets/images/product-list-1.jpg',
        url: '/pages/product/index?productId=000001',
        productName: '生活用品--脸盆',
        price: 1500
      },
      { 
        key: 2,
        src: '/assets/images/product-list-2.jpg',
        url: '/pages/product/index?productId=000002',
        productName: '生活用品--纸巾',
        price: 1000,
        productId: '000002'
      },
      { 
        key: 3,
        src: '/assets/images/product-list-3.jpg',
        url: '/pages/product/index?productId=000003',
        productName: '生活用品--脸盆',
        price: 500,
        productId: '000003'
      },
      { 
        key: 4,
        src: '/assets/images/product-list-4.jpg',
        url: '/pages/product/index?productId=000004',
        productName: '生活用品--脸盆',
        price: 1200,
        productId: '000004'
      }
    ]
	},
  onLoad() {
    const that = this
    this.setData({
      products: localData.products
    })
    // wx.request({
    //   url: `${baseUrl}/api/product`,
    //   success(res) {
    //     that.setData({
    //       products: res.data.result.product
    //     })
    //   }
    // })
  }
})