<template>
  <div style="background: #e1e1e1;position: relative;">
    <div>
      <Top></Top>
    </div>
    <div class="center">
      <router-view></router-view>
      <RightNotice></RightNotice>
    </div>
      <Bottom></Bottom>
  </div>
  
</template>

<script>
  import Top from "../../components/top/Top";
  import RightNotice from "../../components/rightnotice/RightNotice";
  import Bottom from "../../components/bottom/Bottom";
  export default {
    name: "Comment",
    components: {
      Top,
      RightNotice,
      Bottom
    },
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
  .center {
    display: flex;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
  }
</style>