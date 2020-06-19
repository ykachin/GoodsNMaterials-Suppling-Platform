<template>
  <div>
    <myhead></myhead>
    <!--主体-->
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <br/>
    <br/>
    <el-row>
      <el-button @click="needMap" type="success" plain size="medium" autofocus>需求方</el-button>
      <el-button @click="provideMap" type="primary" plain size="medium">提供方</el-button>
    </el-row>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">
      <el-alert v-if="myList.length === 0" title="暂无相关数据" type="info"></el-alert>
      <div class="m-margin-top " style="border-radius: 15px" v-for="(item,index) in myList">
        <div class="ui padded vertical segment" >
          <div class="ui  mobile reversed stackable grid" >
            <div class="forteen wide column left aligned " >
              <h3 class="ui header left aligned" v-if="flag"><a   target="_blank" class="m-black" >{{item.city}}{{item.companyName}}</a></h3>
              <h3 class="ui header left aligned" v-if="!flag"><a   target="_blank" class="m-black" >{{item.city}}{{item.companyName}}</a></h3>
              <span v-if="flag">
                紧急程度：<i v-for="count in item.emergencyValue"><img src="static/images/star.png"></img></i>
                <el-button type="primary" size="mini" @click="Addemergency(item.needId)" v-if="myId==item.userId">加急</el-button>
              </span>
              <el-button type="primary" size="mini" @click="deletePost(item.needId)" v-if="myId==item.userId">删除</el-button>
              <el-card shadow="hover" style="background-color: white" class="m-margin-top-small">
                &emsp;{{item.detail}}
                <br/>
                <el-button v-if='flag' class="m-margin-top" style="margin-left: 10px" type="primary" size="mini" disabled v-for="(item2,index2) in item.needProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
                <el-button v-if='!flag' class="m-margin-top" style="margin-left: 10px" type="primary" size="mini" disabled v-for="(item2,index2) in item.provideProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
              </el-card>
              <div class="ui grid m-margin-top-small">
                <div class="column">
                  <div class="ui mini horizontal link list" style="font-weight: bold;">
                    <span  class="header"  >联系人：{{item.contactName}}</span>&emsp;&emsp;&emsp;
                    <span  class="header"  >联系方式：{{item.contactMedia}}</span>&emsp;&emsp;&emsp;
                    <span  class="header"  >联系电话：{{item.contactPhone}}</span>
                    <br/>
                    <span class="header" >位置：{{item.province}}{{item.street}}</span>&emsp;&emsp;&emsp;
                    <span class="header" >更新时间：{{item.updateTime}}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="style5">
      </div>
    </el-drawer>
    <div class="m-padded-tb-huge" style="position: absolute;left: 50%;margin-left: -600px;">
      <div id="china_map" style='width:1200px;height:800px;'> </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <myfoot></myfoot>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import myhead from "../myhead";
  import myfoot from "../myfoot";
  require('echarts/map/js/china')
  export default {
    inject:['reload'],
    data() {
      return {
        myId:window.sessionStorage.getItem('user_id'),
        myList:[],

        NeedMapInfo_2:[],
        NeedMapInfo:[],
        ProvideMapInfo:[],
        ProvideMapInfo_2:[],
        GeoCoordMap:{},
        drawer: false,
        flag : true,
        activeName: 'first'
      }
    },
    async mounted () {
      const _this = this
      //await this.getNeedMapInfo()
      //console.log("为啥获取不到：",_this.NeedMapInfo_2)
      this.chinachart = echarts.init(document.getElementById('china_map'))
      // 进行相关配置
      this.chartOption = {


        tooltip: { // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          formatter (params, ticket, callback) {
            // params.data 就是series配置项中的data数据遍历
            //console.log("params:",params)
            let localValue,
              perf,
              downloadSpeep,
              usability,
              point,
              needCount,
              province
            needCount =params.value[2]
            province =params.name

            let htmlStr = `
          <div style='font-size:18px;'> ${province}</div>
          <p style='text-align:left;'>
	          需求个数：${needCount}<br/>
          </p>
        `
            return htmlStr
          }
          // backgroundColor:"#ff7f50",//提示标签背景颜色
          // textStyle:{color:"#fff"} //提示标签字体颜色
        },
        // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
        visualMap: { // 左下角的颜色区域
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 60,
          left: 20,
          pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
            {gt: 100, label: '>100', color: '#000c78'}, // (900, 1000]
            {gt: 50, lte: 100, label: '50~100', color: '#1300ee'}, // (500, 900]
            {gt: 30, lte: 50, label: '30~50', color: '#5776ff'}, // (310, 500]
            {gt: 10, lte: 30, label: '10~30', color: '#81a3ff'}, // (200, 300]
            {gt: 0, lte: 10, label: '<10', color: '#84d6f9'}, // (10, 200]
          ]
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: { // 地理坐标系组件用于地图的绘制
          map: 'china', // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          scaleLimit: {
            min: 1,
            max: 5,
          },
          itemStyle: { // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: { // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: '#7a7777',
              areaColor: "#bebaba"
            }
          }
        },
        series: [
          {
            name: '散点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: {},
            symbolSize: function(val) {
              return 15;
            },

            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                textStyle: {
                  color: '#00a8e5',
                  fontSize: 15,
                  fontWeight: 'bold'
                }
              },
              emphasis: {
                show: true
              }
            }
          },{
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
              return 50  ;
            },
            symbolOffset: [0,'-20%'],
            label: {
              normal: {
                show: true,
                formatter: function(params) {
                  return params.data.value[2]
                }

              }

            },
            zlevel: 6,
            data: {},
          }

        ]
      }
      // 使用刚指定的配置项和数据显示地图数据
      /*this.chinachart.setOption(this.chartOption)
  this.chinachart.on( "click", function(params) {
                  var target = params.name;
                  console.log(target)*/
      /* self.getAjax(self.getSearchApi, {
           cate: self.cate ? '我是提供方' : '我是需求方',
           area: target
       }, function(res) {
           self.renderTableList(JSON.parse(res).list, target)
       })*/
      /*_this.drawer = true;

          })*/
      this.GeoCoordMap = this.getLocation();
      //console.log(this.GeoCoordMap);
      this.needMap();
      this.chinachart.on( "click", function(params) {
        var target = {province:params.name};
        console.log(target)
        _this.drawer = true;
        if(_this.flag){
          console.log('flag:',_this.flag)
          _this.$axios({
            method:'post',
            url:'/api/need/getProvinceDetail',
            data:_this.$qs.stringify(target)
          }).then(function(res){
            console.log(res);
            _this.myList = res.data.data
            if(res.data.data.length===0){
              console.log("暂无相关内容")
              _this.$message.success("暂无相关内容")
            }
          }).catch(function(res){
            console.log("fail getting province info");
          })
        }else{
          console.log('flag:',_this.flag)
          _this.$axios({
            method:'post',
            url:'/api/provide/getProvinceDetail',
            data:_this.$qs.stringify(target)
          }).then(function(res){
            console.log("获取提供信息：",res);
            _this.myList = res.data.data
            if(res.data.data.length===0){
              console.log("暂无相关内容")
              _this.$message.success("暂无相关内容")
            }
          }).catch(function(res){
            console.log("fail getting province info");
          })
        }

      })
    },
    methods:{
      /*
        *@function:deletePost
        * @param:needId
        */
      deletePost(needId){
        const _this=this
        if(flag){
          let param={needId:needId}
          this.$axios({
            method: 'DELETE',
            url: '/api/need/deleteMyNeed?needId='+needId,
            // data: this.$qs.stringify(param),
          }).then(function (res) {
            if(res.data.status===200){
              _this.$message.success('删除成功！')
              console.log("删除成功:",res)
              _this.reload()           }
            else{
              _this.$message.error('删除失败！'+res.data.msg)
              console.log("删除失败:",res.data.msg)
            }
          }).catch(function (res) {
            _this.$message.error('删除失败！')
            console.log("删除失败:",res)
          })
        }else{
          let param={provideId:needId}
          this.$axios({
            method: 'DELETE',
            url: '/api/provide/deleteMyProvide?provideId='+needId,
            // data: this.$qs.stringify(param),
          }).then(function (res) {
            if(res.data.status===200){
              _this.$message.success('删除成功！')
              console.log("删除成功:",res)
              _this.reload()           }
            else{
              _this.$message.error('删除失败！'+res.data.msg)
              console.log("删除失败:",res.data.msg)
            }
          }).catch(function (res) {
            _this.$message.error('删除失败！')
            console.log("删除失败:",res)
          })
        }

      },
      /*
        *@function:Addemergency
        * @param:needId
        */
      Addemergency(needId){
        const _this=this
        let param={needId:needId}
        this.$axios({
          method: 'post',
          url: '/api/need/emergency',
          data: this.$qs.stringify(param),
        }).then(function (res) {
          if(res.data.status===200){
            _this.$message.success('加急成功！')
            console.log("加急成功:",res)
            _this.reload()           }
          else{
            _this.$message.error('加急失败！'+res.data.msg)
            console.log("加急失败:",res.data.msg)
          }
        }).catch(function (res) {
          _this.$message.error('加急失败！')
          console.log("加急失败:",res)
        })
      },
      /*
      * @function：getMapInfo
      * @param：null
      * */
      async getNeedMapInfo(){
        const _this=this
        await this.$axios({
          method: 'post',
          url: '/api/need/mapInfo',
        }).then(function (res) {
          // _this.$message.success('获取各省份需求信息成功！')
          console.log("获取各省份需求信息成功:",res.data.data)
          _this.NeedMapInfo=res.data.data
          _this.NeedMapInfo_2 = [];
          for(let c in _this.NeedMapInfo){
            //console.log("c是什么：",c)
            let param ={}
            param['value']=_this.NeedMapInfo[c]['needCount']
            param['name']=_this.NeedMapInfo[c]['province']
            _this.NeedMapInfo_2.push(param)
          }
          console.log('增加value后的数组：',_this.NeedMapInfo_2)
        }).catch(function (res) {
          _this.$message.error('获取各省份需求信息失败！')
          console.log("获取各省份需求信息失败:",res)
        })

      },

      async getProvideMapInfo(){
        const _this=this
        await this.$axios({
          method: 'post',
          url: '/api/provide/mapInfo',
        }).then(function (res) {
          console.log("获取各省份提供信息成功:",res.data.data)
          _this.ProvideMapInfo=res.data.data
          _this.ProvideMapInfo_2=[];
          for(let c in _this.NeedMapInfo){
            //console.log("c是什么：",c)
            let param ={}
            param['value']=_this.ProvideMapInfo[c]['provideCount']
            param['name']=_this.ProvideMapInfo[c]['province']
            _this.ProvideMapInfo_2.push(param)
          }
          console.log('增加value后的数组：',_this.ProvideMapInfo_2)
        }).catch(function (res) {
          _this.$message.error('获取各省份提供信息失败！')
          console.log("获取各省份提供信息失败:",res)
        })

      },


      convertData(data, geoCoordMap){
        var result = [];
        /*console.log(data);
        console.log(this.NeedMapInfo_2.length);
        console.log(data);
        console.log(geoCoordMap);
        console.log(data.length);*/
        for (var i = 0; i < data.length; i++) {

          var geoCoord = geoCoordMap[data[i]['name']];

          if (geoCoord && data[i]['value'] != 0) {
            result.push({
              name: data[i]['name'],
              value: geoCoord.concat(data[i]['value']),
            });
            //console.log(geoCoord);
          }
        }
        console.log(result);
        return result;
      },

      /*
      * @function：showDate
      * @param：object
      * */
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

      getLocation(){
        //获取坐标
        var mapName = "china";
        /*获取地图数据*/
        //console.log("1111111");
        var tmp = {};
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        mapFeatures.forEach(function(v) {

          var name = v.properties.name;
          //console.log(name);
          tmp[name] = v.properties.cp;
          //console.log(v.properties.cp);
        });
        console.log(tmp);
        return tmp;
      },

      async getMapInfo(){
        await this.getNeedMapInfo();
        console.log(this.NeedMapInfo_2);
        var needInfo = this.convertData(this.NeedMapInfo_2, this.GeoCoordMap);
        console.log(needInfo);
        return needInfo;
      },

      async provideMapInfo(){
        await this.getProvideMapInfo();
        console.log(this.ProvideMapInfo_2);
        var provideInfo = this.convertData(this.ProvideMapInfo_2, this.GeoCoordMap);
        return provideInfo;
      },

      async needMap(){
        var tmpOption = this.chartOption;
        console.log(tmpOption);
        var needInfo = await this.getMapInfo();
        console.log(needInfo);
        tmpOption.series[0].data = needInfo;
        tmpOption.series[1].data = needInfo;
        this.flag=true;
        console.log(this.flag);
        this.chinachart.setOption(tmpOption);
        this.chinachart = echarts.init(document.getElementById('china_map'));

      },

      async provideMap(){
        var tmpOption = this.chartOption;
        var provideInfo = await this.provideMapInfo();
        tmpOption.series[0].data = provideInfo;
        tmpOption.series[1].data = provideInfo;
        this.flag=false;
        console.log(this.flag);
        this.chinachart.setOption(tmpOption);
        this.chinachart = echarts.init(document.getElementById('china_map'))
      }

    },
    components:{
      myhead:myhead,
      myfoot:myfoot
    },
    name: "mmap",
    async created() {
      //await this.getNeedMapInfo()
      console.log("created:",this.NeedMapInfo_2)
    }
  }
</script>

<style>
  .el-drawer.rtl{
    overflow: scroll
  }
  hr.style5 {
    background-color: #fff;
    border-top: 2px dashed #8c8b8b;
  }
  /*白云*/
  @-webkit-keyframes STAR-MOVE {
    from {
      background-position:0% 0%
    }
    to {
      background-position: 600% 0%
    }
  }
  @keyframes STAR-MOVE {
    from {
      background-position: 0% 0%
    }
    to {
      background-position: 600% 0%
    }
  }
  .wall{
    position: absolute;
    top: 30px;
    left: 0;
    bottom: -500px;
    right: 0;

  }

  div#midground{
    background:url('../../../static/images/midground.png')repeat 20% 0%;
    z-index: 0;
    -webkit-animation: STAR-MOVE  300s linear infinite;
    -moz-animation: STAR-MOVE  300s linear infinite;
    -ms-animation: STAR-MOVE  300s linear infinite;
    animation: STAR-MOVE  300s linear infinite;
  }
  div#foreground{
    background:url('../../../static/images/foreground.png')repeat 35% 0%;
    z-index: 0;
    -webkit-animation: STAR-MOVE  150s linear infinite;
    -moz-animation: STAR-MOVE  150s linear infinite;
    -ms-animation: STAR-MOVE  150s linear infinite;
    animation: STAR-MOVE  150s linear infinite;
  }
</style>
