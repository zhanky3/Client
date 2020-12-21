<template>
  <div id="app">
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
  background-image: url('./img/2.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
