   <template>
       <div class="index">
        <div class="her_a font-20 background-a">
            <i class="her_a_left float_left"><img src="../../assets/img/A/back_icon@2x.png"></i>
            <i class="her_a_zong color float_zhong">预订</i>
           </div>
      
           <div class="dingjia_jia">
           <div>
           <div class="room border_e">
            <p class="font-14 float_left famjian_b">选择数量</p>
            <div class="ez-counter float_right ">
            <li style="margin-top: -0.25rem;" class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
            <input class="counter-num float_left font-14" type="text" value="1" min="0">
            <li style="margin-top: -0.1rem;" class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
            </div>
            </div>
           </div>
           <div class="font-14 room">
                <div>选择房间</div>
               <div class="float_left">
                   <div class="float_left font-12">单人房间</div>
                    <van-stepper v-model="One" :min='0' />
               </div>
      
                <div class="float_right room_a">
                   <text class="float_left font-12">双人房间</text>
                   <div class="ez-counter float_left ">
                       <li style="margin-top: -0.3rem;" class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
                       <input class="counter-num float_left font-14" type="text" value="1" min="0">
                       <li style="margin-top: -0.15rem;" class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
                   </div>
               </div>
      
               <div class="float_left room_a">
                   <text class="float_left font-12">三人房间</text>
                   <div class="ez-counter float_left ">
                       <li style="margin-top: -0.25rem;" class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
                       <input class="counter-num float_left font-14" type="text" value="1" min="0">
                       <li style="margin-top: -0.1rem;" class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
                   </div>
               </div>
      
               <div class="float_right room_a">
                   <text class="float_left font-12">四人房间</text>
                   <div class="ez-counter float_left ">
                       <li style="margin-top: -0.25rem;" class="counter-minus float_left famjian_a"><img src="../../assets/img/B/bjyw_sub_icon@2x.png"></li>
                       <input class="counter-num float_left font-14" type="text" value="1" min="0">
                       <li style="margin-top: -0.1rem;" class="counter-add float_left famjian_a"><img src="../../assets/img/B/bjyw_add_box@2x.png"></li>
                   </div>
               </div>
           </div>
      
      
         
         <div class="Choose_a_room_dibu " >
              <div class="Choose_a_room_dibu_c font-16 float_left">总计:<span  class="color-h font-12">￥<i class="font-20">699</i></span></div>
              <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g">下一步</button>
           </div>
         </div>
      
       </div>
   </template>
   <script>
   export default {
       name:'index',
       data(){
           return{
              One:0//默认单人房数
           }
       }
   }
   </script>
   