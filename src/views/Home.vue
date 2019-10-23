<template>
  <div style="margin-right: 15px">
         <div id="box">
           <div class="tit" v-for="(item,index) in list" :key="index">
             <span class="tit-cs" :class="{bg:index=== num}" @click="color(index)">
               {{item.name}}
             </span>
           </div>
         </div>
            <div style="background: #ffffff">
              <div v-for="(item,index) in node.slice(
              allPages * (nowPages - 1),
              nowPages * allPages
              )" :key="index" class="cell">
                 <!--头像-->
                <img :src="item.author.avatar_url" width="30px">
                <span style="display: inline-block;width: 70px;text-align: center;">
                  <!--回复数-->
                <span class="reply">{{item.reply_count}}</span>/
                  <!--点击数-->
                <span class="djs">{{item.visit_count}}</span>
                </span>
                     <!--置顶 问答 分享 -->
                <span class="g-zd" v-if="item.top === true">置顶</span>
                <span class="g-wdfx" v-if="item.top === false && item.tab === 'ask'">问答</span>
                  <span  class="g-wdfx " v-if="item.top === false && item.tab === 'share'">分享</span>
                    <!--题目-->
                   <span>
                     <a href="" class="title" @click="details(item)" >{{item.title}}</a>
                   </span>
                    <!--时间-->
                    <div class="time">
                      <span v-if="item.min">{{item.min}}分钟前</span>
                      <span v-if="item.hour">{{item.hour}}小时前</span>
                      <span v-if="item.day">{{item.day}}天前</span>
                    </div>
              </div>
                        <!--分页-->
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10,20,30,40]"
                    :page-size="40"
                    layout="total,sizes,prev,pager,next,jumper"
                    :total="40"
                ></el-pagination>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  props: {},
  data() {
    return {
      currentPage:1,
      allPages:40,
      nowPages:1,
      num:0,
      list:[
        {id:1,name:'全部'},
        {id:1,name:'精华'},
        {id:1,name:'分享'},
        {id:1,name:'问答'},
        {id:1,name:'招聘'},
        {id:1,name:'客户端测试'}
      ],
      node:[]
    };
  },
  methods: {
    getCity(){
      this.$axios.req("api/topics").then(res => {
        this.node=res.data;
        //时间变化
        //1.得到现在时间
        let nowTime =Date.now();
        this.node.map(item =>{
          //设置一个变量装时间差
          let differentTime = nowTime - this.$dayjs(item.last_reply_at).valueOf();
          //用时间差算出最后的分钟数
          let time =differentTime / 1000 / 60 / 60;
          //判断如果时间小于1的话，就是分钟
          if( time < 1){
            //定义一个变量来装 得到的分钟数，向下取整
            let min =Math.floor(time * 60);
            //添加min属性， 并把min的值赋给它
            this.$set(item,"min",min)
          }
          //判断如果时间大于24的话，就是天
          else if(time > 24){
            //定义一个变量来装得到的天数，向下取整
            let day =Math.ceil(time / 24);
            //添加day属性，并把day赋值给它
            this.$set(item, "day", day)
          }
          //判断如果是小于24的话，就是小时
          else {
            //定义一个变量来装 得到的小时数，向下取整
            let hour =Math.floor(time);
            //添加hour属性，并把hour值赋给它
            this.$set(item, "hour" ,hour)
          }
        });
      }).catch(err => {
        console.log(err);
      })
    },
    //分页 页数
    handleSizeChange(val){
      this.allPages=val;
    },
    handleCurrentChange(val){
      this.nowPages=val
    },
    color(index){
      this.num=index
    },
    //点击跳转到详情页面
    details(data){
      this.$router.push({name:"detail",query:{id:data.id}})
    }
  },
  mounted() {
    this.getCity()
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  #box{
    display: flex;
    position: relative;
    .tit{
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      .tit-cs{
        margin: 0 10px;
        color: #80bd01;
        font-size: 14px;
        padding: 3px 4px;
        border-radius: 3px;
        cursor: pointer;
        &:hover{
          color: #08c;
        }
      }
      .bg{
        background: #80bd01;
        color: #fff;
        &:hover{
          color: #fff;
        }
      }
    }
  }
  .cell{
    width:1095px;
    position: relative;
    height: 50px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    white-space: nowrap;
    &:hover{
      background: #f6f6f6;;
    }
    .reply{
      color: #9e78c0;
      text-align: center;
    }
    .djs{
      font-size: 10px;
      color: #b4b4b4;
    }
    .g-zd{
      background: #80bd01;
      padding: 2px 4px;
      color: #fff;
      font-size: 12px;
      border-radius: 3px;
      margin: 0 5px;
    }
    .g-wdfx{
      background-color: #e5e5e5;
      color: #999;
      padding: 2px 4px;
      font-size: 12px;
      border-radius: 3px;
      margin: 0 5px;
    }
    .title{
      display: inline-block;
      color: #333;
      font-size: 16px;
      text-decoration: none;
      width: 785px;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover{
        text-decoration: underline;
      }
    }
    .time{
      display: inline-block;
      position: absolute;
      top:18px;
      right: 10px;
      text-align: right;
      min-width: 50px;
      color: #778087;
    }
  }
</style>
