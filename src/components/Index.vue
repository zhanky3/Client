
<template>
  <div class="">
      <ul>
        <li v-for="item in articlesList" :key="item">
          <el-container >
            <el-main>
              <div class="title">
                <router-link :to="{'path':'/article/details/'+item.id}">{{item.title}}</router-link>
              </div>
              <div class="extra">
                <div class="author">{{item.username}}</div>
                <div class="date">{{item.date}}</div>
              </div>
            </el-main>
          </el-container>
        </li>
      </ul>
      <el-pagination
        layout="prev, pager, next"
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
    }
  }

}

</script>
<style>
.el-pagination {
  position:fixed;
  left: 20px;
  right: 20px;
  bottom:0px;
  margin-bottom: 20px;
}
.el-container {
  height: 100px;
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
  height: 30px;
}
.extra {
  margin-top: 12px;
  bottom: 10px;
  font-size: 12px;
}
.author {
  float: left;
}
.date {
  float: right;
}
</style>
