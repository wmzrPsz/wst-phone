<template>
  <div>
    <div class="her_a font-20 background-a">
      <i class="her_a_left float_left" onclick="window.history.go(-1)">
        <img src="../../assets/img/A/back_icon@2x.png">
      </i>
      <i class="he_t_baoc color">我的收藏</i>
    </div>
    <div class="dingjia">
      <div class="centrality_c font-14" style="width: 95%;margin:auto;">
        <ul>
          <router-link to="/p_collection_a">
            <li>
              常规路线
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
          </router-link>
          <router-link to="/p_collection_b">
            <li>
              当地参团
              <i class="beijingtu">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </li>
          </router-link>
          <router-link to="/p_collection_c">
          <li>
            当地玩家
            <i class="beijingtu">
              <img src="../../assets/img/A/more_icon@2x.png">
            </i>
          </li>
          </router-link>
          <router-link to="/p_collection_d">
          <li>
            邮轮
            <i class="beijingtu">
              <img src="../../assets/img/A/more_icon@2x.png">
            </i>
          </li>
          </router-link>
          <router-link to="/p_collection_e">
          <li>
            景点
            <i class="beijingtu">
              <img src="../../assets/img/A/more_icon@2x.png">
            </i>
          </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>