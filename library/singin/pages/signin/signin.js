// pages/signin/signin.js
// const interval = 


Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0,    // 秒
    timer: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startInterval()
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
   * 用户点击提交
   */
  onSubmit: function(event){
    var content = event.detail.value.content;
    if(content.length == 0){
      wx.showToast({
        title: '内容不能为空!',
        icon: 'loading',
        duration:1500,
      }, 2000)
      clearInterval(this.data.timer)
      return
    }
    
    // TODO post to server
    // and back to previou page
  },
  stop: function(){
    console.log("this is stophandler")
    // var time = setInterval
    clearInterval(this.data.timer)
  },

  continue:function(){
    // setInterval(this.startInterval)
    // console.log(this.data.hours)
    // console.log(this.data.minute)
    // console.log(this.data.second)
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours
    this.setData({
      timer: setInterval(function () {  // 设置定时器
        second++
        if (second >= 60) {
            second = 0  //  大于等于60秒归零
            minute++
            if (minute >= 60) {
                minute = 0  //  大于等于60分归零
                hours++
                if (hours < 10) {
                    // 少于10补零
                    that.setData({
                        hours: '0' + hours
                    })
                } else {
                    that.setData({
                        hours: hours
                    })
                }
            }
            if (minute < 10) {
                // 少于10补零
                that.setData({
                    minute: '0' + minute
                })
            } else {
                that.setData({
                    minute: minute
                })
            }
        }
        if (second < 10) {
            // 少于10补零
            that.setData({
                second: '0' + second
            })
        } else {
            that.setData({
                second: second
            })
        }
      }, 1000)
    })
  },

  startInterval: function () {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours       
    this.setData({
      timer: setInterval(function () {  // 设置定时器
        second++
        if (second >= 60) {
            second = 0  //  大于等于60秒归零
            minute++
            if (minute >= 60) {
                minute = 0  //  大于等于60分归零
                hours++
                if (hours < 10) {
                    // 少于10补零
                    that.setData({
                        hours: '0' + hours
                    })
                } else {
                    that.setData({
                        hours: hours
                    })
                }
            }
            if (minute < 10) {
                // 少于10补零
                that.setData({
                    minute: '0' + minute
                })
            } else {
                that.setData({
                    minute: minute
                })
            }
        }
        if (second < 10) {
            // 少于10补零
            that.setData({
                second: '0' + second
            })
        } else {
            that.setData({
                second: second
            })
        }
      }, 1000)
    })
    console.log(this.data.timer)
},

// interval: function () {  // 设置定时器
//   console.log('get intervel')
//   // hours,  minute, second
//   var second = this.data.second
//   var minute = this.data.minute
//   var hours = this.data.hours
//   console.log(hours+"  "+ minute+"  "+ second)
//   second++
//   if (second >= 60) {
//       second = 0  //  大于等于60秒归零
//       minute++
//       if (minute >= 60) {
//           minute = 0  //  大于等于60分归零
//           hours++
//           if (hours < 10) {
//               // 少于10补零
//               this.setData({
//                   hours: '0' + hours
//               })
//           } else {
//               this.setData({
//                   hours: hours
//               })
//           }
//       }
//       if (minute < 10) {
//           // 少于10补零
//           this.setData({
//               minute: '0' + minute
//           })
//       } else {
//           this.setData({
//               minute: minute
//           })
//       }
//   }
//   if (second < 10) {
//       // 少于10补零
//       this.setData({
//           second: '0' + second
//       })
//   } else {
//       this.setData({
//           second: second
//       })
//   }
// }
  
})