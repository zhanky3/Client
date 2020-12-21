<template>
  <div id="app">
    <div class="choose">
      <el-menu
    :router="true"
    :default-active="this.$route.path"
    class="header"
    mode="horizontal"
    @select="handleSelect"
    background="none"
    active-text-color="rgb(87,215,238)">
      <el-menu-item index="/user" v-if="this.$store.state.username" style='height:50px;width:150px'>
        {{ this.$store.state.username }}
      </el-menu-item>
      <el-menu-item class = "log" index="/login" v-if="this.$store.state.username" style='height:50px;background:red;width:150px'>Logout</el-menu-item>
      <div v-else="">
        <el-menu-item class = "log" index="/register" style='height:40px'>Register</el-menu-item>
        <el-menu-item class = "log" index="/login" style='height:40px'>Login</el-menu-item>
      </div>
    </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start'
}
</script>

<style>
body {
  background-image: url('../img/2.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  margin: 0;
}
.choose{
    width: 20%;
    height: 50%;
    margin: 0 auto;
    margin-top: 15%;
    text-align: center;
    background: #24232360;
    padding: 20px 50px;
    color: rgb(87, 215, 238);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
