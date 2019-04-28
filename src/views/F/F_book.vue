   <template>
       <div class="index">
        <div class="her_a font-20 background-a">
            <i class="her_a_left float_left"  onclick="window.history.go(-1)"><img src="../../assets/img/A/back_icon@2x.png"></i>
            <i class="her_a_zong color float_zhong">预订</i>
           </div>
           <div class="roomjia">
            <input id="date" name="date" type="date"/>
           <div class="room_a ">
            <p class="font-14 float_left famjian_b">成年人</p>
             <van-stepper v-model="adult" :min='0'  class="float_right"/>
           </div>
            <div class="room_a ">
            <p class="font-14 float_left famjian_b">儿童</p>
             <van-stepper v-model="child" :min='0'  class="float_right"/>
           </div>
           <div class="font-14 border_e room_b">
                <div>选择房间</div>
                <div class="room float_left">
                <p class="font-14 float_left famjian_b ">单人房</p>
                <van-stepper v-model="One" :min='0'  class="float_left"/>
                </div>
                 <div class="room float_right">
                <p class="font-14 float_left famjian_b ">双人房</p>
                <van-stepper v-model="two" :min='0'  class="float_left"/>
                </div>
                  <div class="room float_left" style=" clear: both;">
                <p class="font-14 float_left famjian_b ">三人房</p>
                <van-stepper v-model="three" :min='0'  class="float_left"/>
                </div>
                  <div class="room float_right">
                <p class="font-14 float_left famjian_b ">四人房</p>
                <van-stepper v-model="four" :min='0'  class="float_left"/>
                </div>

                  <div class="room float_left" style=" clear: both; margin-left:1.3rem;">
                <p class="font-14 float_left famjian_b ">配</p>
                <van-stepper v-model="arrange" :min='0'  class="float_left"/>
                </div>
           </div>
      
      
         
         <div class="Choose_a_room_dibu " >
              <div class="Choose_a_room_dibu_c font-16 float_left">总计:<span  class="color-h font-12">￥<i class="font-20">{{One*12}}</i></span></div>
              <button class="Choose_a_room_dibu_d float_right background-d font-14 Car_renting_g" @click="nextclick()">下一步</button>
           </div>
         </div>
      
       </div>
   </template>
   <style lang="less">
   .room_a{
       overflow: hidden;
       padding-bottom: 0.5rem;
   }
   .room{
       overflow: hidden;
       margin-top: 0.5rem;
   }
   .room_b{
       margin-top: 0.5rem;
       overflow: hidden;
       padding-bottom: 1.5rem;
   }
   .roomjia{
       width: 95%;
       position: fixed;
       top: 2.5rem;
       left: 2.5%;
       overflow: hidden;
   }
   </style>
   
   <script>
   export default {
       name:'index',
       data(){
           return{
              adult:0,//大人
              child:0,//小孩
              One:0,//默认单人房数
              two:0,//双人房
              three:0,//三人房
              four:0,//四人房
              arrange:0,//配房
              user_date:'',
              price:'',//价格
           }
       },
       //计算属性
       computed:{

       },
       mounted(){
       
       },

       methods:{

       },
   }
   </script>
   