<template>
  <div class="">
      <ul>
        <div class="mes">
          <li v-for="item in articlesList" :key="item">
            <el-container >
              <el-main>
                <div class="title">
                  <router-link :to="{'path':'/article/details/'+item.id}">{{item.title}}</router-link>
                </div>
              </el-main>
            </el-container>
          </li>
        </div>
      </ul>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :total="50">
      </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      currentPage: 1,
      articlesList: []
    }
  },
  mounted: function () {
    this.initArticles()
  },
  methods: {
    initArticles: function () {
      var that = this
      this.$axios.request({
        url: 'http://localhost:8081/articles?page=1',
        method: 'GET',
        responseType: 'json'
      }).then(function (response) {
        console.log(response.data)
        that.articlesList = response.data.ok.slice(1)
      })
    },
    handleCurrentChange: function (currentPage) {
      var that = this
      this.$axios.request({
        url: 'http://localhost:8081/articles?page=' + currentPage.toString(),
        method: 'GET',
        responseType: 'json'
      }).then(function (response) {
        console.log(response.data)
        that.articlesList = response.data.ok.slice(1)
      })
    }
  }

}

</script>
<style>
body{
  background: none;
  background-color: rgb(56, 175, 211);
}
.el-pagination {
  position:fixed;
  left: 40%;
  bottom:0px;
  margin-bottom: 20px;
}
.el-container {
  height: 80px;
  width: 800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 5px auto;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type :none;
  position: relative;
}
a {
  float: left;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.title {
  font-size: 20px;
  height: 30px;
  margin: 0 auto;
}
.author {
  float: left;
}
.date {
  float: right;
}
.mes{
  margin: 0 auto;
  width: 60%;
  height: 100%;
  background-color: white;
}
</style>
