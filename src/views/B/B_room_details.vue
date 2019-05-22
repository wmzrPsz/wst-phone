     <template>
  <div class="index">
    <div class="Choose_a_room beijingtu" :style="backgroundDiv">
      <div class="beijingtu Choose_a_room_a">
        <img src="../../assets/img/A/back_icon@2x.png">
      </div>
    </div>
    <div class="Choose_a_room_b">
      <div class="Choose_a_room_b_j">
        <div class="martop">
          <div class="float_left font-16">LGAFVAKJFOFD</div>
          <div class="float_right font-16">
            <i class="float_left Choose_a_room_b_a beijingtu">
              <img src="../../assets/img/B/bjyw_2xing_icon@2x.png">
            </i>三星酒店
          </div>
        </div>
        <div class="martop">
          <i class="float_left Choose_a_room_b_b beijingtu">
            <img src="../../assets/img/B/bczc_adress_icon@2x.png">
          </i>
          <div
            class="font-12 color-b float_left Choose_a_room_b_c"
          >LGAFVAKJFOFD距离广东省1公里距离广东省1公里广东省1公里距离广东省1公里广东省1公里距离广东省1公里</div>
        </div>
      </div>
    </div>

    <!--选择房间-->
    <div class="kuandu Choose_a_room_d_z">
      <div class="Choose_a_room_d_z_z">
        <div class="Choose_a_room_d beijingtu float_left">
          <img src="../../assets/img/B/5.png">
        </div>
        <div class="Choose_a_room_d_a float_left">
          <ul>
            <Li class="font-16">大理石多多</Li>
            <li class="font-12 color-b float_left">
              <i class="float_left">含有机场20小时包接送</i>
              <i class="Choose_a_room_d_b background-f font-14">无早</i>
            </li>
            <li class="font-12 float_left">可入住1人工还有3件</li>
          </ul>
          <div style="clear: both;">
            <div class="ez-counter float_left" style="margin-top: 0.2rem; ">
              <li class="counter-minus float_left famjian_a Choose_a_room_d_c">
                <img src="../../assets/img/B/bjyw_sub_icon@2x.png">
              </li>
              <input class="counter-num float_left font-14" type="text" value="1" min="0">
              <li class="counter-add float_left famjian_a Choose_a_room_d_d">
                <img src="../../assets/img/B/bjyw_add_box@2x.png">
              </li>
            </div>
            <div class="float_right">
              <i class="font-12 color-h">￥</i>
              <i class="font-18 color-h">699</i>
              <i class="font-16">/起</i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Choose_a_room_dibu">
      <div class="Choose_a_room_dibu_a float_left">
        <i class="Choose_a_room_dibu_b font-12 background-g">3</i>
      </div>
      <div class="Choose_a_room_dibu_c font-16 float_left">已选3件房间</div>
      <button class="Choose_a_room_dibu_d float_right background-d font-16">￥2524预订</button>
    </div>

    <!--已选择酒店-->
    <div class="brijtan yinc"></div>
    <div class="Choose_a_room_dibu_tan yinc">
      <div class="kuandu Choose_a_room_dibu_tan_z">
        <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c">
          <div class="Choose_a_room_d beijingtu float_left">
            <img src="../../assets/img/B/5.png">
          </div>
          <div class="Choose_a_room_d_a float_left">
            <i class="font-14">大理石多多</i>
            <button class="Choose_a_room_dibu_tan_b float_right font-14">删除</button>
            <div class="Choose_a_room_dibu_tan_a">
              <i class="font-12 color-h">￥</i>
              <i class="font-16 color-h">699</i>
              <i class="font-14">/起</i>
            </div>
          </div>
        </div>
        <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c">
          <div class="Choose_a_room_d beijingtu float_left">
            <img src="../../assets/img/B/5.png">
          </div>
          <div class="Choose_a_room_d_a float_left">
            <i class="font-14">大理石多多</i>
            <button class="Choose_a_room_dibu_tan_b float_right font-14">删除</button>
            <div class="Choose_a_room_dibu_tan_a">
              <i class="font-12 color-h">￥</i>
              <i class="font-16 color-h">699</i>
              <i class="font-14">/起</i>
            </div>
          </div>
        </div>

        <div class="Choose_a_room_d_z_z Choose_a_room_dibu_tan_c">
          <div class="Choose_a_room_d beijingtu float_left">
            <img src="../../assets/img/B/5.png">
          </div>
          <div class="Choose_a_room_d_a float_left">
            <i class="font-14">大理石多多</i>
            <button class="Choose_a_room_dibu_tan_b float_right font-14">删除</button>
            <div class="Choose_a_room_dibu_tan_a">
              <i class="font-12 color-h">￥</i>
              <i class="font-16 color-h">699</i>
              <i class="font-14">/起</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.Choose_a_room_dibu_a{
	height:2rem;
	width: 2rem;
	border-radius:50px;
	border: 1px solid gainsboro;
	overflow:hidden;
	background-image:url(../../assets/img/B/bjyw_hotel_icon@2x.png);
	background-size: 100% 100%;
	margin-left: 0.5rem;
	margin-top: 0.25rem;
}
</style>
<script>
export default {
  name: "index",
  data() {
    return {
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/A/home_dingzhi_bg@2x.png") + ")"
      }
    };
  }
};
</script>


	 