// pages/add/add.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    
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
   * 提交新建小组
   */
  onSubmitAdd: function(event){
    console.log(event)
    var value = event.detail.value;
    if(value.team.length < 2 || value.team.length>16){
      wx.showToast({
        title: '组名太短或太长!',
        icon: 'loading',
        duration: 1500,
      }, 2000)
      return
    }

    var start_time = value.start_time
    var end_time = value.end_time
    var pos_colon = start_time.indexOf(':')
    var start_time_hour = parseInt(start_time.substring(0, pos_colon))
    var start_time_min = parseInt(start_time.substring(pos_colon+1))
    pos_colon = end_time.indexOf(':')
    var end_time_hour = parseInt(end_time.substring(0, pos_colon))
    var end_time_min = parseInt(end_time.substring(pos_colon+1))
    
    if(0>=start_time_hour || start_time_hour>=24 
        || 0>=end_time_hour ||end_time_hour>=24 ){
      wx.showToast({
        title: '时间不合法!',
        icon: 'loading',
        duration: 1500,
      }, 2000)
      return
    }

    if(0>start_time_min || start_time_min>=60
        || 0>end_time_min || start_time_min>=60){
        wx.showToast({
          title: '时间不合法!',
          icon: 'loading',
          duration: 1500,
        }, 2000)
        return
    }

    var _start_time = start_time_hour*60 + start_time_min
    var _end_time = end_time_hour*60 + end_time_min

    if(_end_time - _start_time<0){
      wx.showToast({
        title: '结束时间不能小于开始时间!',
        icon: 'loading',
        duration: 1500,
      }, 2000)
      return
    }

    // TODO 提交新建的小组到服务器(外部MySQL)
    wx.request({
      url: 'local://9000',
      method:'POST',
      data:'info',
      header:{
          'content-type':'application/x-www-form-urlencoded',
          'Accept':'application/json'
      },
      success:function(res){
           console.log(res.data)
        }
      });
    
//数据上传

  }
})