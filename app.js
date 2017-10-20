// app
const config = require('/config/index.js');

App({
  onLaunch(){
    const that = this;
    // 校验登录状态
    wx.login({
      success(info) {
        wx.request({
          url: `${config.developConfig.host}/api/login/${info.code}`,
          success(response) {
            wx.setStorageSync('uuid', response.data.result.uuid);
            wx.getUserInfo({
              withCredentials: true,
              success(res) {
                wx.setStorageSync('userInfo', res.userInfo)
              },
              fail(res) {
                console.info(res)
              }
            })
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})