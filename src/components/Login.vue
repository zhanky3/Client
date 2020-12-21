<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
      username
      <el-input v-model="userID"  class='inputClass'></el-input>
   </div>
   <br>
   <div>
      password
      <el-input v-model="password" class='inputClass' type='password'></el-input>
   </div>
   <br>
   <div>
    <el-button type="primary" @click="cilckLogin()">login</el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Sign in to Single Blog',
      userID: '',
      password: ''
    }
  },
  methods: {
    cilckLogin: function () {
      var that = this
      this.$axios.request({
        url: 'http://localhost:8081/user/login',
        method: 'Post',
        data: JSON.stringify({
          Username: this.userID,
          Password: this.password
        }),
        responseType: 'json'
      }).then(function (response) {
        console.log(response.data)
        // 传送数据到store.js的saveToken，并回到主页
        if (!response.data.error) {
          that.$store.commit('saveToken', {
            username: that.userID,
            token: response.data.ok
          })
          that.$router.push('/')
        } else {
          alert(response.data.error)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.inputClass{
  width:300px
}
</style>
