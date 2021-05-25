//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    SignInList: [{
      id: '0001',
      name: '幼儿园的吃饭冠军',
      addr: '/0001'
    },{
      id: '0002',
      name: '2号',
      addr: '/0002'
    }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 保存到全局数据
        app.globalData.userInfo = this.data.userInfo
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 点击 参加的打卡 中的一项
   */
  onClickItem: function(e){
    // TODO 编写点击某一项
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../list/list',
    })
  },
  /**
   * 点击 更多悬浮按钮
   */
  onClickMore: function(e){
    wx.navigateTo({
      url: '../more/more',
    })
  }
})
