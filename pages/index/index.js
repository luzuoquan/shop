// index
const config = require('../../config/index.js')
const baseUrl = config.developConfig.host
Page({
	data: {
		name: 'Fedora123',
    logoUrl: '/assets/images/m_logo.jpg',
    imgUrls: [
      {key: 1, src: '/assets/images/image-1.jpg'},
      {key: 2, src: '/assets/images/image-2.jpg'},
      {key: 3, src: '/assets/images/image-3.jpg'}
    ],
    products: [
      {
        productId: '000001',
        key: 1,
        src: '/assets/images/product-list-1.jpg',
        url: '/pages/product/index?productId=000001',
        productName: '巴蜀懒人四川麻辣火锅',
        price: 1500
      },
      { 
        key: 2,
        src: '/assets/images/product-list-2.jpg',
        url: '/pages/product/index?productId=000002',
        productName: '橄榄菜',
        price: 1000,
        productId: '000002'
      },
      { 
        key: 3,
        src: '/assets/images/product-list-3.jpg',
        url: '/pages/product/index?productId=000003',
        productName: '下饭菜',
        price: 500,
        productId: '000003'
      },
      { 
        key: 4,
        src: '/assets/images/product-list-4.jpg',
        url: '/pages/product/index?productId=000004',
        productName: '方便面',
        price: 1200,
        productId: '000004'
      }
    ]
	},
  onLoad() {
    const that = this;
    wx.request({
      url: `${baseUrl}/api/product`,
      success(res) {
        that.setData({
          products: res.data.result.product
        })
      }
    })
  }
})