<template>
  <div class="main">
    <div class = "title">
      <h2>{{ article.title }}</h2>
    </div>
    <div class = "content" v-html="article.content">
      <br>
      <br>
      <br>
    </div>
    <div class = "comments" >
      <div class="addComment">
        <el-input v-model="toAdd" placeholder="Comment" class='inputClass'></el-input>
        <el-button type="primary" size="mini" @click="DoComment()">comment</el-button>
      </div>
      <ul>
        <li v-for="item in article.comments" :key="item" style="  background-color:rgb(247, 237, 194)">
          <div class="header">
            <div class="author">{{item.user}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class = "comment">{{item.content}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleDetails',
  data () {
    return {
      article: {},
      comments: [],
      toAdd: ''
    }
  },
  mounted: function () {
    // 当组件一加载就执行的函数
    this.init()
  },
  methods: {
    init: function () {
      var that = this
      var nid = this.$route.params.id// 获取id
      this.$axios.request({
        url: 'http://localhost:8081/article/' + nid,
        method: 'GET',
        responseType: 'json'
      }).then(function (response) {
        console.log(response.data)
        that.article = response.data.ok
      })
    },
    DoComment: function () {
      var nid = this.$route.params.id
      if (this.$store.state.username) {
        var that = this
        if (!this.toAdd) {
          this.$alert('请填写评论内容', '显示', {
            confirmButtonText: '确定'
          })
        } else {
          this.$axios.request({
            url: 'http://localhost:8081/article/' + nid + '/comment',
            method: 'Post',
            data: JSON.stringify({
              User: that.$store.state.username,
              Article_id: parseInt(nid),
              Date: '2019-12-6',
              Content: this.toAdd
            }),
            headers: {
              'Authorization': that.$store.state.token
            },
            responseType: 'json'
          }).then(function (response) {
            console.log(response.data)
            if (!response.data.error) {
              that.article.comments = []
              that.article.comments.push({
                user: response.data.ok.user,
                article_id: response.data.ok.article_id,
                date: response.data.ok.date,
                content: response.data.ok.content
              })
              that.toAdd = ''
            } else {
              alert(response.data.error)
            }
          })
        }
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: bisque;
  width: 80%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-bottom: 100px;
}
.author {
  height: 20px;
  float: left;
  margin-left: 20px;
  line-height: 20px;
  color:#909399;
}
.date {
  height: 20px;
  float: left;
  margin-left: 25px;
  line-height: 20px;
  color:#C0C4CC;
}
.content {
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #DCDFE6;
  border-bottom: 1px solid #DCDFE6;
  width: 960px;
  text-align: left;
  color: #606266
}
.comments {
  background-color:white;
  width: 80%;
  margin: auto;
}
.header {
  height: 20px;
}
.header .author {
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin-left: 0px;
}
.header .date {
  font-size: 12px;
}
.comment {
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
  color: #606266
}
.comments li {
  list-style-type :none;
  padding: 8px;
  border-top: 1px dashed #DCDFE6;
}
.comments li:first-child {
  border-top: 1px #DCDFE6;
}
.addComment {
  height: 90px;
}
.el-button {
  float: right;
  margin-top: 10px;
}
</style>
