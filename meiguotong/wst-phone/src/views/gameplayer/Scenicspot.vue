<template>
  <div class="index" style="background-color: white;">
    <div class="dingjia_b">
      <div class="sou_her background-a sou_her_jia" style="clear:both">
        <ul class="sou_her_a">
          <li class="float_left font-16" onclick="window.history.go(-1)">
            <button class="color-f" style="margin-top: 0.3rem;">取消</button>
          </li>
          <li class="sou_her_b">
            <i class="sou_her_d">
              <img src="../../assets/img/A/ic_search.png">
            </i>
            <i>
              <input class="font-12 color-f" type="text" placeholder="搜索旅游地/当地玩家/景点/油轮">
            </i>
          </li>
          <li class="float_right font-16">
            <button class="sou_her_c color background-d">搜索</button>
          </li>
        </ul>

        <ul class="sou_her_q color font-12">
          <router-link to="/sousuo">
            <li>
              <i class="color">常规旅行</i>
              <i></i>
            </li>
          </router-link>
          <router-link to="delegation">
            <li>
              <i class="color">当地参团</i>
              <i></i>
            </li>
          </router-link>
          <router-link to="/game">
            <li>
              <i class="color">当地玩家</i>
              <i></i>
            </li>
          </router-link>
          <router-link to="/Tanker">
            <li>
              <i class="color">邮轮</i>
              <i></i>
            </li>
          </router-link>
          <li>
            <i class="color-g">景点</i>
            <i class="sou_her_q_a"></i>
          </li>
        </ul>
      </div>
      <div class="brijtan_b" v-if="type!=0"></div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>城市</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>

            <li @click="teypex(2)">
              <i>全部筛选</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
          </ul>
        </div>
        <!--城市-->
        <div class="ong_z" v-if="type==1">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">选择城市</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li
                v-for="(list,index) in jdcstyle"
                :key="index"
                :class="list.flag?'b_xianm_b_jiadian':''"
                @click.stop="hanxianClick(index)"
              >{{list.cityName}}({{list.num}})</li>
            </ul>
          </div>
        </div>
        <div class="ong_z" v-if="type==2">
          <div v-for="(list,index1) in getLtyp" :key="index1">
            <div class="b_xianm bus">
              <i class="b_xianm_a">
                <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
              </i>
              <i class="font-16 b_xianm_c">{{list.content}}</i>
            </div>

            <div class="b_xianm" style="margin-top: 0.5rem">
              <ul class="font-12 jg_a color-b">
                <li
                  class="float_left"
                  v-for="(item,index2) in list.comTagList"
                  :key="index2"
                  @click.stop="lableClick(index1,index2)"
                  :class="item.flag?'b_xianm_b_jiadian':''"
                >{{item.content}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="dingjia_a_ajia">
          <ul class="sou_her_www font-14">
          <li @click="sertey(0)" :class="[srtype==0?'sou_her_www_a':'']">
            <button>综合</button>
          </li>
          <li @click="sertey(1)" :class="[srtype==1?'sou_her_www_a':'']">
            <button>销量</button>
          </li>
          <li @click="sertey(2)" v-if="styjiag==1" :class="[srtype==3?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon.png">
              </i>
            </span>
          </li>
          <li @click="sertey(3)"  v-if="styjiag==2" :class="[srtype==2?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon - 1.png">
              </i>
            </span>
          </li>
          <li @click="sertey(4)" :class="[srtype==4?'sou_her_www_a':'']">
            <button>好评</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="dingjia_a">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div class="ze_x">
          <div class="ze_x_a" v-for="(list,index) in styser" :key="index">
            <div style="overflow:hidden; margin-bottom:0.3rem;">
              <div class="float_left ze_x_le">
                <img v-lazy="list.imgUrl | splitVc(0)">
              </div>
              <div class="float_left ze_x_ril">
                <div class="font-14 ze_x_le_a">{{list.name}}</div>
                <ul class="font-12 ze_x_ril_a color-d ze_x_ril_a_jia" v-if="list.tagContent">
                  <li v-for="(list,index) in list.tagContent.split(',')" :key="index">{{list}}</li>
                </ul>
              </div>
            </div>
            <p class="font-12 color-b ze_x_ril_c">{{list.content}}</p>
            <div>
              <div class="float_left font-12 group_d color-h">{{list.countryName}}●{{list.cityName}}</div>
              <ul class="ze_x_ril_d float_right">
                <li class="font-14">
                  <i class="color-h">￥{{list.price}}</i>
                  <i>/元起</i>
                </li>
                <li class="font-12 color-b">{{list.commentNum}}条评论</li>
              </ul>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mescroll {
  position: fixed;
  z-index:9;
  top:9.2rem;
  bottom: 0;
  height: auto;
}
.sou_her_w li {
  width: 50% !important;
  overflow: hidden;
}
</style>

<script>
import { jingdian, zhiding, jdchengshi } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "index",
  data() {
    return {
      type: "", //1日期，2行程，3价格，4全部，
      srtype:"", //1综合，2销量，3降价格，4升价格
      routeType: 4, //自定标签1常规路线,2当地,4景点
      jdcstyle: [], //城市景点出发城市Id
      getLtyp: [], //自定标签
      styser: [], //列表数据
      cityid:"",//传出发城市ID
      tagContent:[],//属性ID
       styjiag:1,//开始1显示降价格，2显示升价格

      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.routine, //回调
				page: {
					size: this.$store.state.pageSize, //每页数据条数
        },
        toTop: {
          //回到顶部按钮
            src: "http://www.mescroll.com/img/mescroll-totop.png", //图片路径,默认null,支持网络图
            offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter(); // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    });
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave(); // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next();
  },
  created() {
    this.getLabeltyp(); //自定标签
    this.jdchens(); //出发城市
    // console.log(this.pageNum);
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    teypex(index) {
      if (this.type != 0 && this.type == index) {
        this.type = "";
      } else {
        this.type = index;
      }
    },
    //销售量和价格的切换
    sertey(index) {
      this.srtype = index;
      this.mescroll.resetUpScroll();
      if(this.srtype==2){
        this.styjiag=2;
      }
      if(this.srtype==3){
        this.styjiag=1;
      }
    },
    queding() {
      this.mescroll.resetUpScroll();
      this.type = 0;
    },
    async routine(page, mescroll) {
      let data = await jingdian(this.cityid.toString() ,this.tagContent.toString(),this.srtype, page.num);
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        for (const list of this.styser) {
          //景点图片
          // if (list.imgUrl) {
          //   this.$set(list, "imgUrl", list.imgUrl.split(",")[0]);
          // }
          //景点tagContent
          // if (list.tagContent) {
          //   this.$set(list, "tagContent", list.tagContent.split(","));
          // }
        }
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(data.list.length);
        });
      } else {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr();
      }
    },
    //出发城市
    async jdchens() {
      let data = await jdchengshi();
      if (data) {
        this.jdcstyle = data;
        for (const list of this.jdcstyle) {
          this.$set(list, "flag", false);
        }
      }
    },
    //点击出发城市
    hanxianClick(index) {
      if(this.jdcstyle[index].flag==false){
        this.jdcstyle.map(elem => {
        elem.flag = false;
      });
      }
      this.jdcstyle[index].flag = !this.jdcstyle[index].flag;
       if(this.jdcstyle[index].flag==true){
        this.cityid=this.jdcstyle[index].cityid;
       }
       if(this.jdcstyle[index].flag==false){
         this.cityid="";
       }
      this.mescroll.resetUpScroll();
    },
    //自定标签
    async getLabeltyp() {
      let data = await zhiding(this.routeType);
      if (data) {
        this.getLtyp = data;
        for (const list of this.getLtyp) {
          this.$set(list, "flag", false);
          for (const item of list.comTagList) {
            this.$set(item, "flag", false);
          }
        }
        console.log(this.getLtyp);
      }
    },
    //点击制定标签
    lableClick(index1, index2) {
      this.getLtyp[index1].comTagList[index2].flag = !this.getLtyp[index1]
        .comTagList[index2].flag;
      this.tagContent = [];
      for (const list of this.getLtyp) {
        for (const item of list.comTagList) {
          if (item.flag) {
            this.tagContent.push(item.tagid); //id
          }
        }
      }
      console.log(this.tagContent);
      this.mescroll.resetUpScroll();
    }
  }
};
</script>
