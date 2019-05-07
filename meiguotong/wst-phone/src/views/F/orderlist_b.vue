<template >
  <div class="index" style="background-color: #F5F5F5">
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
      <i class="her_a_zong color float_zhong">确认订单</i>
    </div>
    <div class="dingjia">
      <div class="Order">
        <div class="gou font-12">
          <div class="gou_a float_left">
            <i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng_icon@2x.png"></i>
            <i class="gou_c">确认订单</i>
          </div>

          <div class="gou_aa ">
            <i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng_icon@2x.png"></i>
            <i class="gou_c">确认付款</i>
          </div>

          <div class="gou_a float_right">
            <i class="gou_b"><img src="../../assets/img/A/sjzc_wancheng__gray_icon@2x.png"></i>
            <i class="gou_c color-b">完成订单</i>
          </div>
          <p class="gou_xian"></p>
        </div>
      </div>
      <div class="Order_a">
         <div class="sanxing_b">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <span class="font-16 float_left">订单详细</span>
           <span class="float_right Insurance_d beijingtu" onclick="window.history.go(-1)"><img src="../../assets/img/B/bjyw_close_icon@2x.png"></span>
        </div>

        <div class="Order_b">
          <div class="Order_b_zz">
            <div class="beijingtu Order_c font-14" :style="backgroundDiv">基础信息</div>
            <div class="Trip_a border_e Insurance_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">订单编号:</dd>
                <dd class="float_right color-b whi_ez">RLgfdhgfhghghgf</dd>
                <dd class="float_left Trip_b">下单时间:</dd>
                <dd class="float_right color-b whi_ez">2018-02-05-2017-05-26</dd>
              </dl>
            </div>


            <div class="Trip_a border_e Insurance_e">
              <text class="font-16 Order_d_b">客户信息</text>
              <dl class="font-14">
                <dd class="float_left Trip_b">联系人</dd>
                <dd class="float_right color-b whi_ez">FGDFG</dd>
                <dd class="float_left Trip_b">电话</dd>
                <dd class="float_right color-b whi_ez">15089861521</dd>
                <dd class="float_left Trip_b">客户备注</dd>
                <dd class="float_right color-b whi_ez">无</dd>
              </dl>
            </div>
           <div class="beijingtu Order_c font-14" :style="backgroundDiv"  style="	margin-top:0.8rem;margin-button:0.3rem;">出行信息</div>
            <div class="Order_d_aa">
              <ul class="Order_d_z">
                <li class="font-14"><i class=float_left>出发地</i><i class="float_right whi_ez">华盛顿机场华盛</i>
                </li>
                <li class="font-14"><i class=float_left>时间</i><i class="float_right whi_ez">2107-05-80</i>
                </li>
                <li class="font-14"><i class=float_left>人数</i><i class="float_right whi_ez">3成人1小孩2行李</i>
                </li>
              </ul>
            </div>
            <div class="Trip_a border_e Orderjia">
              <div class="font-16 Order_d_b">常规路线</div>
              <div class="font-14" style="text-align: left;">跟团旅游5月4号跟团旅游5月4号号跟团旅游5月4号跟团旅游5月4号跟团旅游5月4号</div>
              <div class="font-14 color-d" style="margin-top: 0.5rem; text-align: left;">跟团旅游5月4号跟团旅游5月4号号跟团旅游5月4号跟团旅游5月4号跟团旅游5月4号</div>
              <div class="font-12 color-b" style="margin-top: 0.5rem; text-align: left;">跟团旅游5月4号跟团旅游5月4号号跟团旅游5月4号跟团旅游5月4号跟团旅游5月4号</div>
            </div>


            <div class="Trip_a  Orderjia font-14 room_b">
              <dl class="float_left">房间</dl>
              <dl class="float_right">
                <dd class="float_left">单人一房：2</dd>
                <dd class="float_left">单人一房：2</dd>
              </dl>
              <dl class="float_right">
                <dd class="float_left">单人一房：2</dd>
                <dd class="float_left">单人一房：2</dd>
              </dl>
            </div>

            <!--导游信息-->
            <div class="Orderjia">
              <div class="font-16 Order_d_b">导游信息</div>
              <dl class="font-14 video_dian_c">
                <dd >石头</dd>
                <dd class="video_dian_d"><span>性别:男</span><span>年龄:18</span><span>所在地区:广东</span></dd>
                <dd class="video_dian_d"><span>擅长:本地人唱歌</span></dd>
                <dd class="video_dian_a color-b">个人简历:预计行驶10分连续开车预计行驶10分连续开车预计行驶10分连续开车预计行驶10分连续开车...</dd>
              </dl>
            </div>
          </div>

          <div class="Orderjia">
           <div class="font-16 Order_d_b">出游人信息</div>
            <dl class="font-14 chenglong">
              <dd class="float_left">成龙 Jack chan</dd>
              <dd class="float_right">身份证信息：33***55555</dd>
            </dl>
            <dl class="font-14 chenglong">
              <dd class="float_left">成龙 Jack chan</dd>
              <dd class="float_right">身份证信息：33***55555</dd>
            </dl>
          </div>

        </div>

        <div class="Order_a">
            <div class="sanxing_b">
          <i>
            <img src="../../assets/img/B/clsp_3_icon@2x.png">
          </i>
          <span class="font-16 float_left">订单价格</span>
        </div>
          <div class="Trip">
           <div class="font-16 Order_d_b">常规路线</div>
            <div class="font-14 color-b" style="text-align: left!important;"><i
                class="color-b float_left Order_d_e beijingtu"><img
                  src="../../assets/img/C/cglxxq_date_icon@2x.png"></i>2108年3月15号-2108年3月15号(15天)</div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">行程</dd>
                <dd class="float_right color-b whi_ez">常规路线常规路线常路线常规路线常规路线</dd>
                <dd class="float_left Trip_b">单人房</dd>
                <dd class="float_right color-b whi_ez">1天*￥15268</dd>
                <dd class="float_left Trip_b">双人房</dd>
                <dd class="float_right color-b whi_ez">1天*￥15268</dd>
                <dd class="float_left Trip_b">三人房</dd>
                <dd class="float_right color-b whi_ez">1天*￥15268</dd>
              </dl>
            </div>


          <div class="font-16 Order_d_b">人数</div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b">人数</dd>
                <dd class="float_right ">10成年3小孩</dd>
              </dl>
            </div>
           <div class="font-16 Order_d_b">保险</div>
            <div class="Trip_a border_e">
              <dl class="font-14">
                <dd class="float_left Trip_b Short_distance_relay_b">新华保险（4到5天）新华保险（4到5天）</dd>
                <dd class="float_right ">￥15268</dd>
              </dl>
            </div>
          </div>
        </div>

      </div>
      <div class="Choose_a_room_dibu ">
        <div class="Choose_a_room_dibu_c font-16 float_left">总计:<span class="color-h font-12">￥<i
              class="font-20">699</i></span></div>

      </div>
    </div>
  </div>
</template>
<style lang="less">
.refund_jia {
  width: 80% !important;
  overflow: hidden;
  border-radius: 8px;
  border: 1px slategray solid;
}
.refund_jia p {
  font-size: 13px !important;
  text-align: left;
  width: 90%;
  margin: 0.3rem auto;
}
.Short_distance_relay_c img{
  width: 100%;
  height: 100%;
}
dd{
  text-align: left;
}
</style>
<script>
export default {
  name:'index',
  data(){
    return{
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/B/qrdd_biaoq_bg@2x.png") + ")"
      },
    }
  }
}
</script>

