// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ResultList: [{
      id: '1',
      team: '考研学习小组',
    },
    {
      id: '2',
      team: '数学学习小组',
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
   * 用户点击搜索
   */
  onSubmitSearch: function(event){
    var team = event.detail.value.team;
    if(team.length == 0){
      wx.showToast({
        title: '团队名称不为空!',
        icon: 'loading',
        duration: 1500,
      })
      setTimeout(function(){
        wx.hideToast()
      }, 2000)
    }else{ // team is not null
      // TODO post team name for search
    }
  },
  /**
   * 点击新建小组
   */
  onClickNew: function(event){
    wx.navigateTo({
      url: '../add/add',
    })
  },

  onClickItem: function(event){
    console.log(event.currentTarget.dataset.id)
  }

})