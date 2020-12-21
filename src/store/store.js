import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 组件中通过this.$store.commit(参数)调用
    username: Cookie.get('username'),
    token: Cookie.get('token')
  },
  mutations: {
    // 组件中通过this.$store.commit(参数)调用
    saveToken: function (state, data) { // 存放用户名和token的函数
      state.username = data.username // data代指从后端返回过来的数据
      state.token = data.token
      Cookie.set('username', data.username, '20min') // 吧用户名和token存放到cookie中
      Cookie.set('token', data.token, '20min')
    },
    // 清空token和cookie
    clearToken: function (state) {
      state.username = null
      state.token = null
      Cookie.remove('username')
      Cookie.remove('token')
    }
  }
})
