<template>
  <div>
    <div id="top-box">
      <div class="tb-nab">
        <router-link class="tb-left-img" to="/">
          <img @click="comment" src="../../icons/cnodejs_light.svg" />
        </router-link>
        <div id="tb-inp-div">
          <div class="tb-inp-ss">
            <img
              class="tb-ss-img"
              src="../../icons/ss.svg"
              alt=""
              style="width: 20px;height: 26px"
            />
          </div>
          <input type="text" name="" id="" class="tb-inp" />
        </div>
        <div id="tb-right">
          <div class="tb-right-tit">
            <span class="tit">首页</span>
            <span class="tit">新手入门</span>
            <span class="tit">API</span>
            <span class="tit">关于</span>
            <span class="tit">注册</span>
            <span @click="login" class="tit">登录</span>
            <span @click="err"   class="tit">退出</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    //路由跳转页面l
    login(){
      this.$router.push("/login")
    },
    err(){
      this.$store.state.user =''  //注销用户名
      this.$store.state.pass = ''  //注销密码
      localStorage.removeItem('user')
    },
    comment(){
      this.$router.push("/comment")
    }

  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top-box {
  width: 100%;
  padding: 5px;
  background: #444;

  .tb-nab {
    display: flex;
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
  }

  .tb-left-img {
    display: block;
    width: 120px;
    padding: 3px 20px;
    height: 34px;
    line-height: 34px;

    .tb-left-img img {
      height: 28px;
      line-height: 28px;
    }
  }

  #tb-inp-div {
    margin-top: 5px;
    position: relative;

    .tb-inp {
      width: 233px;
      height: 26px;
      padding: 0px 0px 0px 25px;
      color: #666;
      border: 0;
      margin-top: 2px;
      border-radius: 15px;
      background: #888;
      outline: none;
      transition: all 0.5s;

      &:hover {
        background: #fff;
      }
    }

    .tb-inp-ss {
      position: relative;

      .tb-ss-img {
        position: absolute;
        top: 2px;
        left: 4px;
      }
    }
  }

  #tb-right {
    position: relative;
    left: 600px;

    .tb-right-tit {
      line-height: 40px;
      color: #ccc;
      font-size: 13px;
      .tit {
        padding: 10px 15px;
        cursor: pointer;
        color: #ccc;
        font-size: 13px;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
