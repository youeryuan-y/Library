// pages/signin/signin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signed: false,
    SigninList: [{
      id: '0001',
      avatarUrl: 'smile.png',
      nickName: '路人甲',
      content: '第一天打卡记录',
      date: '2021-05-16 08:29'
    },{
      id: '0002',
      avatarUrl: 'smile.png',
      nickName: '张三',
      content: '第二天图书馆学习',
      date: '2021-05-14 09:00'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击 打卡
   */
  onClickSignin: function(event){
    wx.navigateTo({
      url: '../signin/signin',
    })
  }
})