<template>
  <div>
    <myhead></myhead>
    <!--主体-->
    <div>
      <div  class="m-container m-padded-tb-big animated fadeIn " style="height:400px; background:url(../../../static/images/provider.jpg)no-repeat;background-size:100%,400px">
        <div class="eight wide column">
          <div class="ui stackable grid">
            <div class="wide column two-size-center">
              <div style="margin-top:100px">
                <nav class="mainNavs">
                  <a class="ui big-font" style="color: yellow">物资共享平台</a>
                </nav>
                <br>
                <br>
                <div class="right m-item item m-mobile-hide">
                  <form name="search" action="#"  method="post" target="_blank">
                    <div class="ui icon inverted white input m-margin-tb-tiny">
                      <input type="text" name="query" :query='query' v-model="query"  placeholder="模糊搜索物资，多种物资逗号隔开......" style="width: 500px">
                      <i @click="search" class="search link icon"></i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  class="m-container m-padded-tb-big animated fadeIn ">
        <div class="ui container">
          <div class="ui stackable grid">

            <!--左边广场列表-->
            <div class="sixteen wide column" >
              <!--header-->

              <div class="ui left aligned one column grid" >
                <div class="column">
                  <div class="ui raised segment">
                    <span class="ui inverted blue button">全部</span>
                    <span class="ui inverted blue button" style="margin-right: 55%">热门</span>
                    <span class="ui right aligned icon inverted white input m-margin-tb-tiny ">
                            <input type="text" name="query" :query='query' v-model="query"  placeholder="搜索物资信息..." style="width: 300px">
                            <i @click="search" class="search link icon"></i>
                          </span>
                  </div>
                </div>

              </div>


              <!--content-->

              <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in posts">
                <div class="ui padded vertical segment" >
                  <div class="ui  mobile reversed stackable grid" >
                    <div class="eleven wide column left aligned " >
                      <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >{{item.title}}</a></h3>
                      <el-card shadow="hover" style="background-color: #dddddd" class="m-margin-top-small">
                        {{item.content}}
                      </el-card>
                      <div class="ui grid m-margin-top-small">
                        <div class="column">
                          <div class="ui mini horizontal link list">
                            <div class="item">
                              <img :src="circleUrl"   alt="" class="ui avatar image">
                              <div class="content"><a  class="header"  >{{item.username}}</a></div>
                            </div>
                            <div class="item">
                              <i class="calendar icon"></i><span >{{formatDate(new Date(item.create_time*1000))}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--footer-->
              <div class="ui bottom attached segment m-margin-top" >
                <div class="ui middle aligned">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :page-size="5"
                    :total="posttotal"
                    :current-page="page">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfoot></myfoot>
  </div>
</template>

<script>
  import myhead from "../myhead";
  import myfoot from "../myfoot";

  export default {
    inject:['reload'],
    data() {
      return {
      }
    },
    methods:{
      //处理页码改变后的posts数据
      async handleCurrentChange(current){

      },

      formatDate(date) {
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        var hour=date.getHours();
        var minute=date.getMinutes();
        var second=date.getSeconds();
        //  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
        return year + '-' + (String(month).length > 1 ? month : '0' + month) + '-' +
          (String(day).length > 1 ? day : '0' + day) + ' ' + (String(hour).length > 1 ? hour : '0' + hour) + ':' + (String(minute).length > 1 ? minute : '0' + minute)
          + ':' + (String(second).length > 1 ? second : '0' + second)
      },
    },
    components:{
      myhead:myhead,
      myfoot:myfoot
    },
    name: "provider",
    async created() {
      
    }
  }
</script>

<style scoped>

</style>
