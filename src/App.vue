<template>
  <div id="app">
  <el-menu
    :router="true"
    :default-active="this.$route.path"
    class="header"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <h1 id="SimpleBlog">Blog</h1>
    <div  style='float:right;background-color:black'>
      <el-menu-item index="/" style='height:40px'>Aritcles</el-menu-item>
      <el-menu-item index="/user" v-if="this.$store.state.username" style='height:40px'>{{ this.$store.state.username }}</el-menu-item>
      <div v-else="">
        <el-menu-item class = "log" index="/join" style='height:40px'>Register</el-menu-item>
        <el-menu-item class = "log" index="/login" style='height:45px'>Login</el-menu-item>
      </div>
    </div>
  </el-menu>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-image: url('./img/1.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  margin: 0;
}
.log {
  height: 60px;
}
#SimpleBlog {
  line-height: 1.2;
  height: 50px;
  position: absolute;
  left: 45%;
  font-size: 40px;
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #FFF;
  width: 200px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
