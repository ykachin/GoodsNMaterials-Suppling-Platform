<template>
    <div>
      <myhead></myhead>
      <!--主体-->
      <div>
        <div  class="m-container m-padded-tb-big animated fadeIn " style="height:400px; background:url(../../../static/images/needer.jpg)no-repeat;background-size:100%,400px">
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
                        <el-button type="text" @click="open">点击打开 Message Box</el-button>
                        <el-button @click="needSearch = true">搜索</el-button>
                      </div>
                    </div>

                  </div>
                <el-dialog title="需求" :visible.sync="needSearch">
                  <el-tree
                    :props="props"
                    :load="loadNode"
                    lazy
                    show-checkbox
                    @check-change="handleCheckChange">
                  </el-tree>
                </el-dialog>

                <!--content-->
                <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in needList">
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
                      :total="needtotal"
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
          props: {
            label: 'name',
            children: 'zones'
          },
          query:'',
          count: 1,
          circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        }
      },
      methods:{
        handleCheckChange(data, checked, indeterminate) {
          console.log(data, checked, indeterminate);
        },
        handleNodeClick(data) {
          console.log(data);
        },
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }]);
          }
          if (node.level > 3) return resolve([]);

          var hasChild;
          if (node.data.name === 'region1') {
            hasChild = true;
          } else if (node.data.name === 'region2') {
            hasChild = false;
          } else {
            hasChild = Math.random() > 0.5;
          }

          setTimeout(() => {
            var data;
            if (hasChild) {
              data = [{
                name: 'zone' + this.count++
              }, {
                name: 'zone' + this.count++
              }];
            } else {
              data = [];
            }

            resolve(data);
          }, 500);
        },
        search(){
          const _this=this
          window.sessionStorage.setItem('query',this.query)
          this.flushCom()
        },
        flushCom:function(){
          this.$router.go(0);
        },
        open() {
          const h = this.$createElement;
          this.$msgbox({
            title: '消息',
            message: h('p', null, [
              h('span', null, '内容可以是 '),
              h('i', { style: 'color: teal' }, 'VNode')
            ]),
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 3000);
              } else {
                done();
              }
            }
          }).then(action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          });
        },
      },
      components:{
        myhead:myhead,
        myfoot:myfoot
      },
      name: "needer",
      async created() {

      }
    }
</script>

<style scoped>

</style>
