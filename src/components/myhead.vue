<template>
  <div class="headbody">
    <a class="opleft">&emsp;&emsp;</a>
    <a class="op1">须臾疫物</a>
    <a class="op"  @click="f1">需求方</a>
    <a class="op"  @click="f3">提供方</a>
    <a class="op"  @click="f4">疫情地图</a>
    <a class="op"  @click="f5">捐赠渠道</a>
    <a class="op"  @click="f6">个人主页</a>
    <el-dropdown class="op2">
      <span class="el-dropdown-link" v-if="!showDefaut">
        {{personalInfo}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <span class="el-dropdown-link" v-if="showDefaut" @click="f7">
        请先登录<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!--<a class="op2" href="" @click=""><el-avatar :size="20" :src="circleUrl"></el-avatar></a>-->
  </div>
</template>

<script>
  export default {
    inject:['reload'],
  name: 'myhead',
  data(){
    return{
      showDefaut:true,
      personalInfo:window.sessionStorage.getItem('personalInfo'),
      circleUrl:"https://picsum.photos/100/100/?blur=5"
    }
  },
    created() {
      this.showDefaut = window.sessionStorage.getItem('user_id') === null

    },
    methods:{
      f1(){
        this.$router.push("/needer")
          this.reload()
      },
      f3(){
        this.$router.push("/provider")
        /*this.$router.go(0)*/
        this.reload()
      },
      f4(){
        this.$router.push("/map")
        this.reload()
      },
      f5(){
        this.$router.push("/personaldonate")
        this.reload()
      },
      f6(){
        if(window.sessionStorage.getItem('user_id')){
          this.$router.push("/personalpage")
        }else{
          this.$router.push("/login")
        }
        this.reload()
      },
      f7(){
        this.$router.push("/login")
        this.reload()
      },
      logout(){
        window.sessionStorage.clear()
        const _this=this
        _this.$router.push("/login")
      }
    }
}
</script>

<style scoped>
  .headbody{
    overflow: hidden;
    background-color: #333;
  }
  .headbody .op{
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 2%;
    text-decoration: none;
    font-size: large;
  }
  .headbody .op1{
    float: left;
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 2%;
    text-decoration: none;
    font-size: large;
  }
  .headbody .op:hover{
    background-color: #ddd;
    color: black;
  }
  .headbody .op2{
    float: right;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 3px;
    text-decoration: none;
    font-size: large;
  }
  .opleft {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .teamname{
    margin: 0px;
    font-size: medium;
    float: left;
  }
  a{
    font-size: medium;
    text-decoration: none;
    float: right;
  }
  .logout{
    float: right;
    color: #f2f2f2;
    text-decoration: none;
    text-align: center;
    font-size: large;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #f2f2f2;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
