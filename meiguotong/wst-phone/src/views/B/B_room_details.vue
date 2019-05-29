     <template>
  <div class="index">
    <div class="beijingtu Choose_a_room_a">
      <img src="../../assets/img/A/back_icon@2x.png" onclick="window.history.go(-1)">
    </div>
    <div class="flexslider">
      <van-swipe :autoplay="1000" class="flexslider_jia">
        <van-swipe-item>
          <img v-lazy="holetroom.imgUrl">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="Choose_a_room_b">
      <div class="Choose_a_room_b_j">
        <div class="martop_room">
          <div class="float_left font-16">{{holetroom.name}}</div>
          <div class="float_right font-16">
            <i class="float_left Choose_a_room_b_a beijingtu">
              <img v-if="holetroom.level==1" src="../../assets/img/B/bjyw_1xing_icon@2x.png">
              <img v-if="holetroom.level==2" src="../../assets/img/B/bjyw_2xing_icon@2x.png">
              <img v-if="holetroom.level==3" src="../../assets/img/B/bjyw_3xing_icon@2x.png">
              <img v-if="holetroom.level==4" src="../../assets/img/B/bjyw_4xing_icon@2x.png">
              <img v-if="holetroom.level==5" src="../../assets/img/B/bjyw_5xing_icon@2x.png">
            </i>
            {{holetroom.level | hotle}}
          </div>
        </div>
        <div class="martop_room">
          <i class="float_left Choose_a_room_b_b beijingtu">
            <img src="../../assets/img/B/bczc_adress_icon@2x.png">
          </i>
          <div class="font-12 color-b float_left Choose_a_room_b_c">{{holetroom.address}}</div>
        </div>
      </div>
    </div>

    <!--选择房间-->
    <div class="kuandu">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit" class="mescrolist">
        <div class="Choose_a_room_d_z_z" v-for="(list,index) in styser" :key="index">
          <div class="Choose_a_room_d beijingtu float_left">
            <img :src="list.imgUrl">
          </div>
          <div class="Choose_a_room_d_a float_left">
            <ul>
              <Li class="font-16 texe_left">{{list.content}}</Li>
              <li class="font-12 color-b float_left">
                <i class="float_left">{{list.content}}</i>
                <!-- <i class="Choose_a_room_d_b background-f font-14">无早</i> -->
              </li>
              <li class="font-12 float_left">最大入住人数{{list.people}},剩余{{list.stockNum}}</li>
            </ul>
            <div style="clear: both;">
              <van-stepper
                v-model="list.Number"
                :min="0"
                :max="list.stockNum"
                class="float_left"
                style="margin-top:0.3rem;"
              />
              <div class="Choose_a_room_dibu_tan_a float_right" style="margin-right:1rem;">
                <i class="font-12 color-h">￥</i>
                <i class="font-16 color-h">{{list.price}}</i>
                <i class="font-14">/起</i>
              </div>
            </div>
          </div>
        </div>
      </mescroll-vue>
    </div>

    <div class="Choose_a_room_dibu">
      <div class="Choose_a_room_dibu_a float_left" @click="roomclick()">
        <i class="Choose_a_room_dibu_b font-12 background-g">{{roonumber}}</i>
      </div>
      <div class="Choose_a_room_dibu_c font-16 float_left">已选{{roonumber}}件房间</div>
      <button
        class="Choose_a_room_dibu_d float_right background-d font-16"
        @click="bookroom()"
      >￥{{fanprice}}预订</button>
    </div>

    <!--已选择酒店-->
    <div class="brijtan" v-if="typlist==2" @click="roomclick()"></div>
    <div class="Choose_a_room_dibu_tan" v-if="typlist==2">
      <div v-for="(list,index) in roomlisttyp" :key="index">
        <div class="kuandu Choose_a_room_dibu_tan_z" >
          <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c">
            <div class="Choose_a_room_d beijingtu float_left">
              <img :src="list.imgUrl">
            </div>
            <div class="Choose_a_room_d_a float_left">
              <div class="font-14 texe_left">{{list.roomName}}</div>
              <button
                class="Choose_a_room_dibu_tan_b float_right font-14"
                @click="deleteclick(list)"
              >删除</button>
              <div class="Choose_a_room_dibu_tan_a texe_left">
                <i class="font-12 color-h">￥</i>
                <i class="font-16 color-h">{{list.price}}*{{list.Number}}</i>
                <i class="font-14">/起</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.texe_left {
  text-align: left;
}
.Choose_a_room_dibu_a {
  height: 2rem;
  width: 2rem;
  border-radius: 50px;
  border: 1px solid gainsboro;
  overflow: hidden;
  background-image: url(../../assets/img/B/bjyw_hotel_icon@2x.png);
  background-size: 100% 100%;
  margin-left: 0.5rem;
  margin-top: 0.25rem;
}
.martop_room {
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.2rem;
  text-align: left;
}
.mescrolist {
  widows: 100%;
  position: fixed;
  top: 15rem !important;
  bottom: 2.5rem;
  height: auto;
}
.Choose_a_room_d_a ul li {
  clear: both;
}
.brijtan {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 2;
  opacity: 0.4;
  z-index: 99 !important;
}
</style>
<script>
import { mapState } from "vuex";
import { copy } from "@/utils/common";
import { getHotelRoomUrl } from "@/utils/getData";
import MescrollVue from "mescroll.js/mescroll.vue";
import { hotle } from "@/filters/custom";
import {mapMutations} from "vuex";
export default {
  name: "index",
  data() {
    return {
      list:[],
      typlist: 1,
      styser: [], //房间列表
      mescroll: null, // mescroll实例对象
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.hlroom, //回调
        page: {
          size: this.$store.state.pageSize //每页数据条数
        },
        toTop: {
          //回到顶部按钮
          src: "../../assets/img/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        }
      }
    };
  },
  computed: {
    ...mapState({
      holetroom: state => state.route.holetroom, //酒店信息
      Generalroom: state => state.route.roomlist,//获取总选择的房间列表
    }),
    //计算选中的房间
    roomlisttyp(){
      let roomlistdedt=[];
     for(let list of this.styser){
     let roomlist={};
     if (list.Number!=0 ){
     roomlist=list;
     roomlistdedt.push(roomlist);
     }
     }
     return roomlistdedt;
    },
    //计算一共选中多少房间
    roonumber() {
      let number = 0;
      for (let room of this.roomlisttyp) {
        number = number + room.Number;
      }
      return number;
    },
    //计算房间一共多少价格
    fanprice() {
      let price = 0;
      for (let room of this.roomlisttyp) {
        price = price + room.price * room.Number;
      }
      return price;
    },
    //计算房间选择列表
    roomlist(){
      let holetroomlist={};
      this.$set(holetroomlist,'date',this.$route.params.date);
      this.$set(holetroomlist,'hotelid',this.holetroom.id);
      this.$set(holetroomlist,'hotelname',this.holetroom.name);
      for (let room of this.styser) {
       if(room.Number!=0){
         this.$set(room,'hotelid',this.holetroom.id);
         this.list.push(room);
       }
      }
      this.$set(holetroomlist,'room',this.list)
      return holetroomlist;
    }
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
  mounted() {
    console.log(this.Generalroom);
    console.log(this.holetroom);
  },
  methods: {
     ...mapMutations("route",["roomtyp"]),
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //酒店房间
    async hlroom(page, mescroll) {
      let data = await getHotelRoomUrl(
        this.$route.params.date,
        this.holetroom.id,
        page.num
      );
      if (data) {
        // 如果是第一页需手动制空列表
        if (page.num === 1) this.styser = [];
        // 把请求到的数据添加到列表
        this.styser = [...this.styser, ...data.list];
        //
        for (let telist of this.styser) {
          this.$set(telist, "Number", 0);
          this.$set(telist,"date",this.$route.params.date)
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
    //展示选择的房间
    roomclick: function() {
      if (this.typlist == 1) {
        this.typlist = 2;
      } else if (this.typlist == 2) {
        this.typlist = 1;
      }
    },
    //删除房间
    deleteclick(list) {
      list.Number = 0;
    },
    //点击预订
    bookroom: function() {
      if(this.fanprice!=0){
        let zongslist=[];
       if(this.Generalroom.length==0){
        //第一次选择酒店
        zongslist.push(this.roomlist)
      }else if(this.Generalroom.length!=0){
        //不是第一次选要先等于前面选择的房间
         zongslist = this.copy(this.Generalroom);
         zongslist.push(this.roomlist)
      }
       this.roomtyp(zongslist);
       this.$router.push({
        path: "/B_rent"
      });
      } else  if(this.fanprice==0){
        this.$toast("选择房间");

      }
    }
  }
};
</script>


	 