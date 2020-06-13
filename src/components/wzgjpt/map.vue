<template>
    <div>
      <myhead></myhead>
      <!--主体-->
      <el-button @click="drawer = true" type="primary" plain>主要按钮</el-button>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
        <span>我来啦!</span>
      </el-drawer>
      <div class="m-padded-tb-huge" style="position: absolute;left: 50%;margin-left: -600px; ">
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
          NeedMapInfo_2:[],
          NeedMapInfo:[],
          drawer: false,
        }
      },
      //数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
      // watch: {
      //   //观察option的变化
      //   chartOption: {
      //     handler(newVal, oldVal){
      //       if (this.chinachart) {
      //         if (newVal) {
      //           this.chinachart.setOption(newVal,true);
      //         } else {
      //           this.chinachart.setOption(oldVal,true);
      //         }
      //       }
      //     },
      //     deep: true //对象内部属性的监听，关键。
      //   }
      // },
      async mounted () {
        const _this=this
        await this.getNeedMapInfo()
        console.log("为啥获取不到：",_this.NeedMapInfo_2)
        this.chinachart = echarts.init(document.getElementById('china_map'))
        // 进行相关配置
        this.chartOption = {
          tooltip: { // 鼠标移到图里面的浮动提示框
            // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
            formatter (params, ticket, callback) {
              // params.data 就是series配置项中的data数据遍历
              console.log("params:",params)
              let localValue,
                perf,
                downloadSpeep,
                usability,
                point,
                needCount,
                province
              needCount =params.value
              province =params.name
              // if (params.data) {
              //   localValue = params.data.value
              //   perf = params.data.perf
              //   downloadSpeep = params.data.downloadSpeep
              //   usability = params.data.usability
              //   point = params.data.point
              //   needCount =params.data.needCount
              //   province =params.data.province
              // } else { // 为了防止没有定义数据的时候报错写的
              //   localValue = 0
              //   perf = 0
              //   downloadSpeep = 0
              //   usability = 0
              //   point = 0
              //   needCount = 0
              //   province =''
              // }
              /*let htmlStr = `
          <div style='font-size:18px;'> ${params.name}</div>
          <p style='text-align:left;margin-top:-10px;'>
	          区域对应数据value：${localValue}<br/>
	          性能perf：${perf}<br/>
	          下载速度downloadSpeep：${downloadSpeep}<br/>
	          可用性usability：${usability}<br/>
	          监测点数point：${point}<br/>
          </p>
        `*/
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
              {gt: 900, lte: 1000, label: '非常好', color: '#6ad86e'}, // (900, 1000]
              {gt: 500, lte: 900, label: '正常', color: '#9adcfa'}, // (500, 900]
              {gt: 310, lte: 500, label: '警告', color: '#ffeb3b'}, // (310, 500]
              {gt: 200, lte: 300, label: '较差', color: '#ff9800'}, // (200, 300]
              {gt: 10, lte: 200, label: '非常差', color: 'orangered'}, // (10, 200]
              {value: 0, label: '无数据', color: '#999'} // [0]
            ]
          },
          // geo配置详解： https://echarts.baidu.com/option.html#geo
          geo: { // 地理坐标系组件用于地图的绘制
            map: 'china', // 表示中国地图
            // roam: true, // 是否开启鼠标缩放和平移漫游
            zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
            label: {
              show: true
            },
            itemStyle: { // 地图区域的多边形 图形样式。
              borderColor: 'rgba(0, 0, 0, 0.2)',
              emphasis: { // 高亮状态下的多边形和标签样式
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [
            {
              name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
              type: 'map',
              geoIndex: 0,
              label: {
                show: true
              },
              // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
              data: _this.NeedMapInfo_2
              // [{"name": "北京",
              //   "value": 599,}]
              /*[{
                'name': '北京',
                'value': 599,
                'perf': '0.501s', // 性能
                'downloadSpeep': '1.221MB/s', // 下载速度
                'usability': '100%', // 可用性
                'point': '250' // 监测点
              }, {
                'name': '上海',
                'value': 142
              }, {
                'name': '黑龙江',
                'value': 44
              }, {
                'name': '新疆',
                'value': 999,
                'perf': '0.501s', // 性能
                'downloadSpeep': '1.221MB/s', // 下载速度
                'usability': '100%', // 可用性
                'point': '250' // 监测点
              }, {
                'name': '深圳',
                'value': 92
              }, {
                'name': '湖北',
                'value': 810
              }, {
                'name': '四川',
                'value': 453
              }
              ]*/
            },
            // {
            //   name: '散点',
            //   type: 'effectScatter',
            //   coordinateSystem: 'geo',
            //   data: 100,
            //   symbolSize: function(val) {
            //     return 15;
            //   },
            //   label: {
            //     normal: {
            //       formatter: '{b}',
            //       position: 'right',
            //       show: true,
            //       textStyle: {
            //         color: '#00B8FF'
            //       }
            //     },
            //     emphasis: {
            //       show: true
            //     }
            //   },
            //   itemStyle: {
            //     normal: {
            //       color: 'yellow'
            //     }
            //   }
            // },
            // {
            //   name: '点',
            //   type: 'scatter',
            //   coordinateSystem: 'geo',
            //   symbol: 'pin', //气泡
            //   symbolSize: function(val) {
            //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
            //     var b = minSize4Pin - a * min;
            //     b = maxSize4Pin - a * max;
            //     return 40  ;
            //   },
            //   symbolOffset: [0,'-20%'],
            //   label: {
            //     normal: {
            //       show: true,
            //       formatter: function(params) {
            //         return params.data.value[2]
            //       },
            //       textStyle: {
            //         color: '#fff',
            //         fontSize: 12,
            //         fontWeight: 'bold'
            //       },
            //     }
            //
            //   },
            //   itemStyle: {
            //     normal: {
            //       color: 'royalblue', //标志颜色
            //     }
            //   },
            //   zlevel: 6,
            //   data: 100,
            // },
            // {
            //   name: 'kuoSan',
            //   type: 'effectScatter',
            //   coordinateSystem: 'geo',
            //   data: 100,
            //   symbolSize: function(val) {
            //     return 25;
            //   },
            //   showEffectOn: 'render',
            //   rippleEffect: {
            //     brushType: 'stroke'
            //   },
            //   hoverAnimation: true,
            //   label: {
            //     normal: {
            //       formatter: '{b}',
            //       position: 'right',
            //       show: false//bug：设置为true造成top5的省份名称重影
            //     }
            //   },
            //   itemStyle: {
            //     normal: {
            //       color: 'yellow',
            //       shadowBlur: 10,
            //       shadowColor: 'yellow'
            //     }
            //   },
            //   zlevel: 1
            // }

          ]
        }
        // 使用刚指定的配置项和数据显示地图数据
        this.chinachart.setOption(this.chartOption)

      },
      methods:{
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
            _this.$message.success('获取各省份需求信息成功！')
            console.log("获取各省份需求信息成功:",res.data.data)
            _this.NeedMapInfo=res.data.data
            for(let c in _this.NeedMapInfo){
              console.log("c是什么：",c)
              let param ={}
              param['"value"']=_this.NeedMapInfo[c]['needCount']
              param['"name"']=_this.NeedMapInfo[c]['province']
              _this.NeedMapInfo_2.push(param)
              /*_this.NeedMapInfo[c]['"value"']=_this.NeedMapInfo[c]['needCount']
              _this.NeedMapInfo[c]['"name"']=_this.NeedMapInfo[c]['province']*/
              /*delete _this.NeedMapInfo[c].province
              delete _this.NeedMapInfo[c].needCount*/

            }
            console.log('增加value后的数组：',_this.NeedMapInfo_2)
          }).catch(function (res) {
            _this.$message.error('获取各省份需求信息失败！')
            console.log("获取各省份需求信息失败:",res)
          })

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

<style scoped>

</style>
