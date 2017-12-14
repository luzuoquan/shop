// app
const config = require('/config/index.js');

App({
  onLaunch(){
    const that = this;
    // 校验登录状态
    wx.login({
      success(info) {
        // wx.request({
        //   url: `${config.developConfig.host}/api/login/${info.code}`,
        //   success(response) {
        //     wx.setStorageSync('uuid', response.data.result.uuid);
        //     wx.getUserInfo({
        //       withCredentials: true,
        //       success(res) {
        //         wx.setStorageSync('userInfo', res.userInfo)
        //       },
        //       fail(res) {
        //         wx.showModal({
        //           content: '登录失败，服务异常',
        //           showCancel: false
        //         })
        //       }
        //     })
        //   }
        // })
      }
    })
  },
  globalData: {
    userInfo: null,
    products: [
      {
        productId: '000001',
        key: 1,
        imageUrl: '/assets/images/product-list-1.jpg',
        url: '/pages/product/index?productId=000001',
        productName: '巴蜀懒人四川麻辣火锅',
        price: 1500,
        distribution: '快递',
        inventory: 20
      },
      { 
        key: 2,
        imageUrl: '/assets/images/product-list-2.jpg',
        url: '/pages/product/index?productId=000002',
        productName: '橄榄菜',
        price: 1000,
        productId: '000002',
        distribution: '快递',
        inventory: 200
      },
      { 
        key: 3,
        imageUrl: '/assets/images/product-list-3.jpg',
        url: '/pages/product/index?productId=000003',
        productName: '下饭菜',
        price: 500,
        productId: '000003',
        distribution: '快递',
        inventory: 120
      },
      { 
        key: 4,
        imageUrl: '/assets/images/product-list-4.jpg',
        url: '/pages/product/index?productId=000004',
        productName: '方便面',
        price: 1200,
        productId: '000004',
        distribution: '快递',
        inventory: 2000
      }
    ]
  }
})