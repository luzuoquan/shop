// index
const baseUrl = 'http://192.168.1.114:3001'
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
      { key: 1, src: '/assets/images/product-list-1.jpg', url: 'http://m.chifan.co.kr/product/detail.html?product_no=110&cate_no=1&display_group=4', title: '巴蜀懒人四川麻辣火锅', price: 190},
      { key: 2, src: '/assets/images/product-list-1.jpg', url: 'http://m.chifan.co.kr/product/detail.html?product_no=110&cate_no=1&display_group=4', title: '巴蜀懒人四川麻辣火锅', price: 190 },
      { key: 3, src: '/assets/images/product-list-1.jpg', url: 'http://m.chifan.co.kr/product/detail.html?product_no=110&cate_no=1&display_group=4', title: '巴蜀懒人四川麻辣火锅', price: 190 },
      { key: 4, src: '/assets/images/product-list-1.jpg', url: 'http://m.chifan.co.kr/product/detail.html?product_no=110&cate_no=1&display_group=4', title: '巴蜀懒人四川麻辣火锅', price: 190 }
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