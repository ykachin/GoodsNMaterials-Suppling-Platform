<template>
    <div>
      <div class="nmsl bubbles">
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>
        <div class="nmsl bubble"></div>

      </div>
      <myhead></myhead>
      <!--主体-->
<!--      <div>-->
<!--        <div style="padding-top:10px;padding-bottom:10px;padding-right:20px;border-radius:5px;left:50%;margin-top:50px;width: 800px;background-color: #f2f2f2;margin-left: -400px;position: relative;">-->
<!--          <div style="margin-left: 20px;margin-top: 20px;width: 100%;padding-bottom: 10px">-->
<!--            <el-page-header @back="backtoprimarypage" content="个人捐赠">-->
<!--            </el-page-header>-->
<!--          </div>-->
<!--          <br>-->
<!--          <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" ref="ruleForm" class="demo-ruleForm">-->
<!--            <el-form-item label="我的账号" prop="user_id">-->
<!--              <el-input v-model="username" disabled></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="物资选择" prop="status">-->
<!--              <template>-->
<!--                <el-select v-model="ruleForm.status" clearable placeholder="请选择状态" style="width: 100%;">-->
<!--                  <el-option-->
<!--                    v-for="item in options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value"-->
<!--                  >-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </template>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="联系人" prop="title">-->
<!--              <el-input v-model="ruleForm.title"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="联系方式" prop="tags">-->
<!--              <el-input v-model="ruleForm.tags"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item label="联系方式2" prop="score">-->
<!--              <el-input v-model.number="ruleForm.score"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="地址" prop="url">-->
<!--              <el-input v-model="ruleForm.url"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="机构" prop="content">-->
<!--              <el-input v-model="ruleForm.content"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="备注" prop="content">-->
<!--              <el-input type="textarea" v-model="ruleForm.content"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item class="m-margin-top">-->
<!--              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--              <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </div>-->
<!--        <br>-->
<!--        <br>-->
<!--        <br>-->
<!--        <br>-->
<!--      </div>-->
      <div>
        <!--<div  class="m-container m-padded-tb-big animated fadeIn need-bg" style="height:400px; background:url(../../../static/images/needer.jpg)no-repeat;background-size:100%,400px">-->
        <div  class="m-container m-padded-tb-big animated fadeIn" >
          <div class="ui container donate-bg">
            <div class="ui stackable grid ">
              <div class="sixteen wide column two-size-center">
                <div style="margin-top:100px">
                  <nav class="mainNavs">
                    <a class="ui big-font" style="color: yellow">物资共享平台</a>
                  </nav>
                  <br>
                  <br>
                  <div class="right m-item item m-mobile-hide">
                    <form name="search" action="#"  method="post" target="_blank">
                      <div class="ui icon inverted white input m-margin-tb-tiny">
                        <input type="text" name="query" :query='query' v-model="query"  placeholder="模糊搜索捐献渠道......" style="width: 500px">
                        <i @click="search" class="search link icon"></i>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  class="m-container m-padded-tb animated fadeIn ">
          <div class="ui container">
            <div class="ui stackable grid">

              <!--左边广场列表-->
              <div class="sixteen wide column" >
                <!--header-->
                <div class="ui left aligned one column grid" >
                  <div class="column">
                    <div class="ui raised segment">
                      <span class="ui inverted blue button" @click="showAll">全部</span>
                      <!--<el-button type="text" @click="open">点击打开 Message Box</el-button>
                      <el-button @click="needSearch = true">搜索</el-button>-->
                    </div>
                  </div>

                </div>

                <!--content-->
                <div class="ui attached  segment m-margin-top container animated" style="border-radius: 15px" v-for="(item,index) in donateList">
                  <div class="ui padded vertical segment" >
                    <div class="ui  mobile reversed stackable grid" >
                      <div class="forteen wide column left aligned " >
                        <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >{{item.name}}</a></h3>
                        <el-card shadow="hover" style="background-color: white" class="m-margin-top-small">
                          <i class="hospital outline icon"></i>捐献单位：{{item.accountName}}<br/>
                          <i class="dollar sign icon"></i>捐献账户：{{item.account}}<br/>
                          <i class="building icon"></i>受理银行：{{item.bank}}
                        </el-card>
                        <!--<div class="ui grid m-margin-top-small">
                          <div class="column">
                            <div class="ui mini horizontal link list">
                              <div class="item">
                                <div class="content"><a  class="header"  >相关联系人：{{item.person}}</a></div>
                              </div>
                              <div class="item">
                                <div class="content"><a  class="header"  >相关联系方式：{{item.tel}}</a></div>
                              </div>
                            </div>

                          </div>
                        </div>-->
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
                      :total="totolDonateNum"
                      :current-page="parseInt(page)">
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
    import bg from '../../../static/js/bg_script'

    import VDistpicker from 'v-distpicker'

    export default {
      inject:['reload'],
      data() {
        return {
          donateList:[],
          page:1,
          //totolNeedNum
          totolDonateNum:0,

          //showGoods
          activeNames: ['1'],
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
        showAll(){
          this.reload()
        },
        handleCurrentChange(current){
          console.log('当前页',current)
          this.page=current
          this.getDonateList()
        },
        /*
        *@function:getTotalDonateNum
        * @param:null
        */
        getTotalDonateNum(){
          const _this=this
          this.$axios({
            method: 'get',
            url: '/api/donate/getNums',
          }).then(function (res) {
            // _this.$message.success('获取捐献渠道总数成功！')
            console.log("获取捐献渠道总数成功:",res)
            _this.totolDonateNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取捐献渠道总数失败！')
            console.log("获取捐献渠道总数失败:",res)
          })
        },
        /*
        *@function:getSearchDonateNum
        * @param:null
        */
        getSearchDonateNum(){
          const _this=this
          this.$axios({
            method: 'post',
            url: '/api/donate/getQueryNums',
            data:{query:_this.query}
          }).then(function (res) {
            _this.$message.success('获取搜索捐献渠道总数成功！')
            console.log("获取搜索捐献渠道总数成功:",res)
            _this.totolDonateNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取搜索捐献渠道总数失败！')
            console.log("获取搜索捐献渠道总数失败:",res)
          })
        },
        /*
        *@function:获取捐献渠道
        * @param:null
        */
        getDonateList(){
          const _this=this
          let param={start:(parseInt(this.page)-1)*5,count:5,query:this.query}
          this.$axios({
            method: 'post',
            url: '/api/donate/getInfo',
            data: param
          }).then(function (res) {
            // _this.$message.success('获取捐献渠道List成功！')
            console.log("获取捐献渠道List成功:",res)
            _this.donateList=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取捐献渠道List失败！')
            console.log("获取捐献渠道List失败:",res)
          })
        },
        search(){
          const _this=this
          _this.getDonateList()
          _this.getSearchDonateNum()
          //_this.reload()
          /*window.sessionStorage.setItem('query',this.query)
          this.flushCom()*/
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
        myfoot:myfoot,
        VDistpicker,
        bg
      },
      name: "personaldonate",
      async created() {
        this.getDonateList()
        this.getTotalDonateNum()
      }
    }
</script>

<style scoped lang="less">
  .donate-bg{
    height:400px;
    background:url(../../../static/images/way.jpeg)no-repeat;
    background-size:100%,400px;
  }
  /**
 * transform-origin 设置旋转元素的基点位置
 * animation-name 设置动画名称
 * animation-duration 设置动画时间
 * animation-fill-mode 设置播放后的状态
 * animation-iteration-count 设置循环播放的次数
 * transition-timing-function: cubic-bezier 贝塞尔曲线效果，它有四个值，指在X轴与Y轴的两个曲线的点，第一个点：X1 Y1;第二个点：X2 Y2
 * transform: translate3d 设置动画Z轴位移几个元素，表示只在Z轴上移动
 *
 * 需要注意：transform: translate3d 不等于 transform: translateZ
 */

  .animated {
    animation-duration: 1s; /*动画时间*/
    animation-fill-mode: both; /*播放后的状态*/
  }

  .animated {
    animation-iteration-count: 1; /*动作循环的次数：infinite 无限循环*/
  }

  .animated {
    animation-duration: 2s; /*动画时间*/
  }


  .container:hover{
    animation-name:container; /*动画的名称*/
    transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
    cursor: pointer;
  }

  @keyframes container{
    0%,
    100%,
    20%,
    50%,
    80% {
      transition-timing-function: cubic-bezier(0.215,.61,.355,1); /*贝塞尔曲线 ： X1 Y1 X2 Y2*/
      transform: translate3d(0,0,0); /*设置只在Z轴上移动*/
    }
    40%,
    43%{
      transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
      transform: translate3d(0,-30px,0);
    }
    70%{
      transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
      transform: translate3d(0,-15px,0);
    }
    90%{
      transform: translate3d(0,-4px,0);
    }
  }
  /*背景*/
  @import '../../../static/css/bg_style.css';
</style>
