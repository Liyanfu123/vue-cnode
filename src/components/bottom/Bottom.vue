<template>
  <div >
    <div id="bot-box">
      <div class="bot-div">
       <div style="margin-bottom: 6px">
         <span style="color: #666;">RSS</span> | <span style="color: #666;">源码地址</span>
       </div>
        <div style="color:#ababab;">
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p> 服务器赞助商为<img src="../../icons/9.png" style="width: 92px;vertical-align: middle">
            ，存储赞助商为 <img src="../../icons/10.png" style="width: 115px">  ,  由
            <img src="../../icons/QQ图片20191021112641.png" style="width: 166px;height: 54px">提供应用性能服务。
          </p>
          <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Bottom",
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  #bot-box{
    position: relative;
    background: #fff;
    .bot-div{
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      color: #e2e2e2;
      padding: 20px 0;
      font-size: 13px;
      p{
        line-height: 20px;
        font-size: 14px;
        vertical-align: bottom;
        margin: 0 0 10px;
        a{
          color: #08c;
          text-decoration: none;
          &:hover{
            text-decoration: underline;
            color: #34357c;
          }
        }
      }
    }
  }
</style>