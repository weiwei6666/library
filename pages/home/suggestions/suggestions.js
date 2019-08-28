// pages/home/suggestions/suggestions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    user_id: null, //用户ID
    library_name: '华南理工大学图书馆',
    library_avater: '',

    commentsSet: [{
      user_id: '',
      avartar: '',
      name: '',
      time: '',
      detail: '',
      click_num: null,
      if_click: null
    },
    {
      user_id: '',
      avartar: '',
      name: '',
      time: '',
      detail: '',
      click_num: null,
      if_click: null
    }
    ],
    respondsSet: [{
      question: '',
      respond: '',
      time: ''

    }, {
      question: '',
      respond: '',
      time: ''
    }]
  },
  onChange(event) {
    if (event.detail.index==0){
      wx.showToast({
        title: `读者心声`,
        icon: 'none'
      });
    } else if (event.detail.index == 1){
      wx.showToast({
        title: `官方回复`,
        icon: 'none'
      });
    }
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this;
    // that.getComments();
    // that.getResponds();

  },

  getComments: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: '',
      data: {
        user_id: that.data.user_id
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) { //成功后根据当前的页面刷新次数进行黏接或重填
        console.log(res.data);
        that.setData({
          commentsSet: res.data
        });
        wx.hideLoading();
      },
      fail: function (res) {
        wx.hideLoading();
      }
    })
  },

  getResponds: function () {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.request({
      url: '',
      data: {
        user_id: that.data.user_id
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) { //成功后根据当前的页面刷新次数进行黏接或重填
        console.log(res.data);
        that.setData({
          respondsSet: res.data
        });
        wx.hideLoading();
      },
      fail: function (res) {
        wx.hideLoading();
      }
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

  }
})