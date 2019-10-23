<template>
  <div id="left">
    <div id="con">
      <div id="box1">
        <div v-if="detail.top === true" class="left">置顶</div>
        <div class="right">{{ detail.title }}</div>
        <div id="box2">
          <div v-if="detail.day"><span>·</span>发布于{{ detail.day }}天前</div>
          <div v-else-if="detail.month">
            <span>·</span>发布于{{ detail.month }}月前
          </div>
          <div v-else-if="detail.hour">
            <span>·</span>发布于{{ detail.hour }}小时前
          </div>
          <div v-else-if="detail.min">
            <span>·</span>发布于{{ detail.min }}分钟前
          </div>
          <div v-if="detail.author">
            <span>·</span>作者{{ detail.author.loginname }}
          </div>

          <!--          防止报错，因为存在请求时间，异步操作-->

          <div><span>·</span>{{ detail.visit_count }}次浏览</div>
          <div v-if="detail.tab === 'share'"><span>·</span>来自分享</div>
          <div v-else-if="detail.tab === 'ask'"><span>·</span>来自问答</div>

          <!--          判断时间-->
        </div>
      </div>

      <!--      盒子装顶部-->

      <div id="content" v-html="detail.content">
        {{ detail.content }}
      </div>

      <!--      中间内容-->
    </div>
    <div id="reply">
      <div class="top">
        <div class="header">{{ detail.reply_count }}回复</div>
      </div>
      <div v-for="(item, index) in detail.replies" :key="index" class="content">
        <div class="img"><img :src="item.author.avatar_url" /></div>
        <div class="msg">
          <div class="log">{{ item.author.loginname }}</div>
          <div class="rt">
            {{ index + 1 }}楼
            <span v-if="item.day"><i>·</i>{{ item.day }}天前</span>
            <span v-else-if="item.month"><i>·</i>{{ item.month }}月前</span>
            <span v-else-if="item.hour"><i>·</i>{{ item.hour }}小时前</span>
            <span v-else-if="item.min"><i>·</i>{{ item.min }}分钟前</span>
          </div>
        </div>
        <div
            v-if="item.author.loginname === detail.author.loginname"
            class="box"
        >
          作者
        </div>
        <div id="footer">
          <div class="reply"><p v-html="item.content"></p></div>
          <div class="good">{{ item.ups.length }}</div>
        </div>
      </div>
    </div>
    <!--    下方评论区-->
  </div>
</template>
<script>
  export default {
    name: "detail",
    components: {},
    props: {},
    data() {
      return {
        id: "",
        detail: []
      };
    },
    methods: {
      get() {
        this.$axios
            .req(`/api/topic/${this.id}`)
            .then(response => {
              console.log(response);
              this.detail = response.data; //使detail的数据来自data
              let nowtime = Date.now(); //取得现在的时间戳
              // this.detail.replies.map(item => {
              let differ = nowtime - this.$dayjs(this.detail.create_at).valueOf(); //获取创建文件的时间戳
              let times = differ / 1000 / 60 / 60; //时间转换成小时
              if (times < 1) {
                let mins = Math.floor(times * 60);
                this.$set(this.detail, "min", mins);
              } else if (times > 24 && times < 720) {
                let days = Math.ceil(times / 24);
                this.$set(this.detail, "day", days);
              } else if (times > 720) {
                let month = Math.ceil(times / 720);
                this.$set(this.detail, "month", month);
              } else {
                let hours = Math.floor(times);
                this.$set(this.detail, "hour", hours);
              }

              //进行判断

              this.detail.replies.map(item => {
                let difference = nowtime - this.$dayjs(item.create_at).valueOf();
                let time = difference / 1000 / 60 / 60;
                if (time < 1) {
                  let min = Math.floor(time * 60);
                  this.$set(item, "min", min);
                } else if (time > 24 && time < 720) {
                  let day = Math.ceil(time / 24);
                  this.$set(item, "day", day);
                } else if (time > 720) {
                  let month = Math.ceil(time / 720);
                  this.$set(item, "month", month);
                } else {
                  let hour = Math.floor(time);
                  this.$set(item, "hour", hour);
                }
              });
            })
            .catch(err => {
              console.log(err); //没获取到时间打印错误
            });
      }
    },
    mounted() {
      this.id = this.$route.query.id; //根据id判断引入相应的数据
      this.get();
    },
    created() {},
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  };
</script>

<style scoped lang="scss">
  #left {
    width: 70%;
    margin-top: 20px;
    margin-left: 90px;
    .right {
      width: 100%;
    }
  }
  #con {
    padding: 15px;
    background-color: white;
  }
  #box1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.33);
    height: 87px;
    line-height: 87px;
    padding: 10px;
    display: flex;
  }
  #box1 .left {
    margin-top: 35px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    width: 44px;
    height: 18px;
    background-color: #80d81b;
    margin-right: 5px;
    color: white;
  }
  #box1 .right {
    font-size: 25px;
    font-weight: bold;
  }
  #box2 {
    width: 600px;
    top: 30px;
    right: 675px;
    position: relative;
    display: flex;
    font-size: 13px;
    color: #838383;
    div {
      margin-right: 10px;
    }
    span {
      font-weight: bold;
    }
  }
  #reply {
    margin-top: 20px;
    background-color: white;
    .content {
      padding: 10px;
      width: 1088px;
      min-height: 81px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    .top {
      width: 100%;
      height: 45px;
      line-height: 45px;
      background-color: #f6f6f6;
      .header {
        margin-left: 10px;
      }
    }
    .img img {
      width: 30px;
    }
    .msg {
      width: 230px;
      display: flex;
      margin-left: 10px;
      .log {
        font-size: 12px;
        color: #666666;
      }
      .rt {
        margin-left: 5px;
        font-size: 12px;
        color: #0088cc;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        i {
          font-weight: bold;
        }
      }
    }
  }
  .reply p {
    position: relative;
    top: 20px;
    right: 160px;
    font-size: 15px;
  }
  #reply .box {
    position: relative;
    right: 20px;
    text-align: center;
    width: 50px;
    height: 18px;
    background-color: #80d81b;
    color: white;
    font-size: 12px;
  }
  #footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>