<template>
  <div class="index">
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
         <li>
            <i class="color-g">当地玩家</i>
            <i  class="sou_her_q_a"></i>
          </li>
          <li>
            <i>油轮</i>
            <i></i>
          </li>
          <li>
            <i>景点</i>
            <i></i>
          </li>
        </ul>
      </div>
      <!--日期筛选-->
      <div class="shaixuang">
        <div class="sou_her_ww">
          <ul class="sou_her_w font-12">
            <li @click="teypex(1)">
              <i>年龄</i>
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
              <i>行程</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(3)">
              <i>价格预算</i>
              <span class="s_a">
                <i class="sou_her_w_a">
                  <img src="../../assets/img/A/sign_open_icon@2x.png">
                </i>
                <i class="sou_her_w_a yinc">
                  <img src="../../assets/img/A/sign_open_icon@3x.png">
                </i>
              </span>
            </li>
            <li @click="teypex(4)">
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
        <!--日期-->
        <div class="ong_z" v-if="type==1">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">年龄段</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li>90后</li>
            </ul>
          </div>
        </div>

        <!--性别-->
        <div class="ong_z" v-if="type==2">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">性别</i>
          </div>

          <div class="b_xianm">
            <ul class="font-12 b_xianm_b color-b">
              <li>男</li>
            </ul>
          </div>
        </div>

        <!--价格预算-->
        <div class="ong_z" v-if="type==3">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">价格预算</i>
          </div>

          <div class="b_xianm" style="margin-top: 0.5rem">
            <ul class="font-12 jg_a color-b">
              <li
                class="float_left"
                v-for="(listpr,index) in priceList"
                :key="index"
                :class="listpr.flag?'b_xianm_b_jiadian':''"
                @click.stop="contentClick(index)"
              >{{listpr.content}}</li>
              <div class="jg_c">
                <li class="float_left" :class="minpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(1)"
                    type="number"
                    placeholder="最小价格"
                    v-model.number="minPrice"
                  >
                </li>
                <li class="float_left" :class="maxpak==1?'b_xianm_b_jiadian':''">
                  <input
                    @click="prmClick(2)"
                    type="number"
                    placeholder="最大价格"
                    v-model.number="maxPrice"
                  >
                </li>
              </div>
            </ul>
          </div>
          <button
            class="di_s_b_dengl color background-d font-16"
            style="margin-top: 1.5rem; margin-bottom:0.5rem;"
            @click="queding()"
          >确定</button>
        </div>
        <!--全部筛选-->
        <div class="qyuanb ong_z" v-if="type==4">
          <div class="b_xianm bus">
            <i class="b_xianm_a">
              <img src="../../assets/img/A/home_tanchu_circle_icon@2x.png">
            </i>
            <i class="font-16 b_xianm_c">筛选日期</i>
          </div>
        </div>
      </div>

      <div class="dingjia_a_ajia">
        <ul class="sou_her_www font-14">
          <li @click="sertey(1)" :class="[srtype==1?'sou_her_www_a':'']">
            <button>销量</button>
          </li>
          <li @click="sertey(4)" :class="[srtype==4?'sou_her_www_a':'']">
            <button>好评</button>
          </li>
          <li @click="sertey(2)" :class="[srtype==2?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon.png">
              </i>
            </span>
          </li>
          <li @click="sertey(3)" :class="[srtype==3?'sou_her_www_a':'']">
            <i>价格</i>
            <span class="s_a">
              <i class="sou_her_w_a_a">
                <img src="../../assets/img/A/cglv_jiageopen_icon - 1.png">
              </i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="dingjia_a">
      <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
        <div class="wanjia_jia" >
          <div class=" wanjia_a border_a">
            <div class="wanjia_b">
              <img style="width: 100%;" src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
                <li class="font-12 color-b wanjia_e">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
                <li class="font-12 color-b">
                  <i class="wanjia_f">
                    <img src="../../assets/img/A/home_lydz_adres2_icon@2x.png">
                  </i>美国·纽约
                </li>
                <li class="font-14 color-b">
                  <i class="color-h">￥699</i>
                  <i>/天</i>
                </li>
              </ul>
            </div>
          </div>
           <div class=" wanjia_a border_a">
            <div class="wanjia_b">
              <img style="width: 100%;" src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
                <li class="font-12 color-b wanjia_e">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
                <li class="font-12 color-b">
                  <i class="wanjia_f">
                    <img src="../../assets/img/A/home_lydz_adres2_icon@2x.png">
                  </i>美国·纽约
                </li>
                <li class="font-14 color-b">
                  <i class="color-h">￥699</i>
                  <i>/天</i>
                </li>
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
  z-index: -1;
  top: 9rem;
  bottom: 0;
  height: auto;
}
</style>

<script>
export default {
  name: "index",
  data() {
    return {
      type: "", //1年龄段，2性别，3价格，4全部，
    }
  }
}
</script>
