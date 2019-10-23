<template>
  <div>
            <div id="cont-right">
              <!--登录-->
              <div>
                <div class="cr-panel" v-if="user">
                  <div class="cr-topic">
                    <span style="color: #444">个人信息</span>
                  </div>
                  <div class="cr-inner">
                    <div class="cr-text" style="color: #666;font-weight: bold;cursor: pointer;font-size: 16px">{{user}}</div>
                    <div class="cr-text">积分：0</div>
                    <div class="cr-text">这个家伙很懒，什么都没留下</div>
                  </div>
                </div>
              </div>
              <div class="cr-logon" v-if="user === ''">
                <div class="cr-logon-div">
                  <p>CNode：Node.js专业中文社区</p>
                  <div style="margin-top: 25px">您可以 <span class="cr-text" @click="login">登录</span>或者<span class="cr-text">注册</span>，也可以
                    <span class="cr-log-gh" @click="github">通过 GitHub 登录</span>
                  </div>
                </div>
              </div>
              <!--图片-->
              <div id="cr-img-div">
                <div class="cr-img">
                  <a href="">
                    <img src="../../icons/a1.jpg" style="max-width: 100%;" />
                  </a>
                  <div style="height: 10px"></div>
                  <a href="">
                    <img src="../../icons/a2.jpg" style="max-width: 100%;" />
                  </a>
                  <div style="height: 10px"></div>
                  <a href="">
                    <img src="../../icons/a3.jpg" style="max-width: 100%;" />
                  </a>
                </div>
              </div>
              <!--话题-->
              <div class="cr-panel">
                <div class="cr-topic">
                  <span style="color: #444">无人回复的话题</span>
                </div>
                <div class="cr-inner">
                  <div class="cr-text">请问有谁了解 VuePress JAMStack Headless cms 么</div>
                  <div class="cr-text">RabbitMQ 消费端服务限流实践</div>
                  <div class="cr-text">string compare 字符串相似度比较</div>
                  <div class="cr-text">利用 RabbitMQ 死信队列和 TTL 实现定时任务</div>
                  <div class="cr-text">Alfred 4 Workflow Open in VSCode</div>
                </div>
              </div>
              <!--积分Top榜-->
              <div class="cr-panel">
                <div class="cr-topic">
                  <span style="color: #444;margin-right: 10px">积分榜</span>
                  <a href="" style="color: #444;text-decoration: none">Top100>></a>
                </div>
                <div class="cr-inner">
                  <div class="cr-text"><span style="margin-right: 20px">21725</span><span class="jfb-top">i5ting</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">15650</span><span class="jfb-top">alsotang</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">9350</span><span class="jfb-top"> leapon</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">9030</span><span class="jfb-top">atian25</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">8780</span><span class="jfb-top">jiyinyiyong</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">7305</span><span class="jfb-top">yakczh</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">6815</span><span class="jfb-top">im-here</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">6095</span><span class="jfb-top">DevinXian</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">5815</span><span class="jfb-top">chapgaga</span></div>
                  <div class="cr-text"><span style="margin-right: 20px">5350</span><span class="jfb-top">magicdawn</span></div>
                </div>
              </div>
              <!--友情社区-->
              <div class="cr-panel">
                <div class="cr-topic">
                  <span style="color: #444">友情社区</span>
                </div>
                <div class="cr-inner">
                  <div class="cr-text">
                    <a href=""><img src="../../icons/h1.png" style="width: 150px"></a>
                  </div>
                  <div class="cr-text">
                    <a href=""><img src="../../icons/h2.png" style="width: 150px"></a>
                  </div>
                  <div class="cr-text">
                    <a href=""><img src="../../icons/h3.png" style="width: 150px"></a>
                  </div>
                  <div class="cr-text">
                    <a href=""><img src="../../icons/8.png" style="width: 150px" ></a>
                  </div>
                </div>
              </div>
              <!--二维码-->
              <div class="cr-panel">
                <div class="cr-topic">
                  <span style="color: #444">客户端二维码</span>
                </div>
                <div class="cr-inner">
                  <div class="cr-text" style="text-align: center;">
                    <img src="../../icons/ewm.png" alt="" style="width: 200px;">
                  </div>
                  <div class="cr-text jfb-top" style="text-align: center;">客户端源码地址</div>
                </div>
              </div>
            </div>
  </div>
  
</template>

<script>
  export default {
    name: "RightNotice",
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {
      github(){
          this.$router.push("/github")
      },
      login(){
        this.$router.push("/login")
      }
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {
      //从store中调取输入的数据
      user(){
        return this.$store.state.user
      }
    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  #cont-right {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    background: #e1e1e1;
    .cr-logon {
      margin-bottom: 13px;
      font-size: 13px;
      width: 290px;
      height: 116px;
      background: #fff;
      .cr-logon-div {
        padding: 10px;
        border-radius: 0 0 3px 3px;
        p{
          font-size: 14px;
          margin: 0 0 10px;
          word-break: break-word;
        }
      }
      .cr-text{
        color: #778087;
        font-size: 13px;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
      .cr-log-gh{
        display: inline-block;
        padding: 3px 10px;
        font-size: 14px;
        transition: all .2s ease-in-out;
        cursor: pointer;
        letter-spacing: 2px;  /* 字母间距：2倍；*/
        box-shadow: none;   /*边框阴影*/
        border-radius: 3px;
        line-height: 2em;
        vertical-align: middle;  /*垂直对齐：中间；*/
        color: #fff;
        background-color: #5bc0de;
        margin-top: 8px;
        &:hover{

        }
      }
    }
  }
  #cr-img-div {
    margin-bottom: 13px;
    .cr-img {
      background: #fff;
      padding: 10px;
      border-radius: 0 0 3px 3px;
    }
  }
  .cr-panel {
    margin-bottom: 13px;
    font-size: 13px;
  }
  .cr-topic {
    padding: 10px;
    background-color: #f6f6f6;
  }
  .cr-inner{
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background: #fff;
    .cr-text{
      font-size: 13px;
      color: #778087;
      max-width: 270px;
      text-decoration: none;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;   /* 强制显示在同一行，强制不换行*/
      line-height: 30px;
    }
    .jfb-top{
      &:hover{
        cursor: pointer;
        text-decoration:underline;
      }
    }
  }
</style>