<template>
  <div class="indexher">
    <!-- 头部 -->

    <ezHeader></ezHeader>
    <div class="dingjia">
      <div
        :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}"
        class="baoc_jia"
      >
        <p>开启你的旅行</p>
        <router-link to="/sousuo">
        <div class="baoc_sou">
          <i>
            <img src="../../assets/img/A/xpjcs_sea_icon.png">
          </i>
          <input type="text" placeholder="搜索旅行地/酒店/旅游/景点门票/交通" name>
        </div>
        </router-link>
      </div>
    </div>
    
    <!--头部导航栏-->
    <div class="daohan">
      <ul>
        <li> <router-link to="/B_index">包车租车</router-link></li>
        <li><router-link to="/F_index">常规路线</router-link></li>
        <li><router-link to="/G_index">当地参团</router-link></li>
        <li><router-link to="/H_index">当地玩家</router-link></li>
        <li><router-link to="/K_index">邮轮</router-link></li>
        <li>包车租车</li>
      </ul>

      <ul>
        <li>当地玩家</li>
        <li>当地玩家</li>
        <li>当地玩家</li>
        <li>当地玩家</li>
        <li>当地玩家</li>
        <li>当地玩家</li>
      </ul>

      <ul id="daohan_a">
        <li>纽约</li>
        <li>华盛顿</li>
        <li>旧金山</li>
        <li>拉斯维加斯</li>
        <li>纽约</li>
        <li>华盛顿</li>
        <li>旧金山</li>
        <li>拉斯维加斯</li>
        <li>纽约</li>
        <li>华盛顿</li>
        <li>旧金山</li>
        <li>拉斯维加斯</li>
      </ul>
    </div>
    <!--推荐行程-->
    <div class="bao_zon">
      <!--热门租车-->
      <div class="bao_zon_a">
        <img src="../../assets/img/A/home_lvdz_bg@2x.png">
        <li class="bao_zon_b">
          <i class="font-18">推荐行程</i>
          <i class="font-12 color-b" style="margin-left: 0.5rem;">RECOMMMRRE</i>
        </li>
      </div>

      <div class="bao_her_a font-14 color-b" style="margin-top: 0px!important">
        <ul>
          <li>
            <i class="color-d">美国西部</i>
            <i class="bao_her_b"></i>
          </li>
          <li>
            <i>二级分类</i>
            <i></i>
          </li>
          <li>
            <i>三级分类</i>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="gameplayer_f_a gameplayer_f_aa">
        <ul>
          <li>
            <span>
              <img src="../../assets/img/B/24.png">
            </span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b">
                <i class="color-h">￥166元</i>/起
              </dd>
            </dl>
          </li>
          <li>
            <span>
              <img src="../../assets/img/B/25.png">
            </span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b">
                <i class="color-h">￥166元</i>/起
              </dd>
            </dl>
          </li>

          <li>
            <span>
              <img src="../../assets/img/B/25.png">
            </span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b">
                <i class="color-h">￥166元</i>/起
              </dd>
            </dl>
          </li>

          <li>
            <span>
              <img src="../../assets/img/B/24.png">
            </span>
            <dl>
              <dd class="font-16">美国·洛杉矶</dd>
              <dd class="font-12 color-b">
                <i class="color-h">￥166元</i>/起
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <!--客服和广告-->
    <div class="kef_a bao_zon">
      <div class="float_left kef">
        <img style="width: 100% ;" src="../../assets/img/B/2.png">
      </div>
      <div class="float_right kef_b">
        <div
          class="kef_c"
          :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}"
        >
          <i class="float_left font-14 color">最新定制案例</i>
          <i class="float_right font-12 color">MOER>></i>
        </div>
        <div class="kef_d">
          <div class="float_left kef_d_a">
            <img style="width: 100%" src="../../assets/img/B/3.png">
          </div>
          <div class="float_right kef_d_b">
            <ul>
              <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b float_right">1分钟前</li>
            </ul>
          </div>
        </div>
        <div class="kef_d">
          <div class="float_left kef_d_a">
            <img style="width: 100%" src="../../assets/img/B/3.png">
          </div>
          <div class="float_right kef_d_b">
            <ul>
              <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b float_right">1分钟前</li>
            </ul>
          </div>
        </div>
        <div class="kef_d">
          <div class="float_left kef_d_a">
            <img style="width: 100%" src="../../assets/img/B/3.png">
          </div>
          <div class="float_right kef_d_b">
            <ul>
              <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b float_right">1分钟前</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--热门租车公司-->
    <div class="gameplayer">
      <i class="float_left">
        <img src="../../assets/img/A/home_rmzcgs_icon@2x.png">
      </i>
      <div class="float_left font-14 gameplayer_a">热门租车公司</div>
      <i class="float_left">
        <img src="../../assets/img/A/home_rmzcgs2_icon@2x.png">
      </i>
    </div>

    <div class="gameplayer_b">
      <i></i>
      <span class="font-10 color-b float_left">FOLLOWING MORE DISPLAY</span>
      <i></i>
    </div>
    <div class="wanjia">
      <div class="wanjia_q">
        <div class="float_left wanjia_a border_a gameplayer_e_a">
          <div class="wanjia_b">
            <img style="width: 100%;" src="../../assets/img/A/3.png">
          </div>
          <div class="wanjia_c">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">加州租车</li>
              <li
                class="font-12 color-b"
                style="margin-top: 0.5rem;
                    margin-bottom: 0.5rem;"
              >阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
            </ul>
          </div>
        </div>
        <div class="float_left wanjia_a border_a gameplayer_e_a">
          <div class="wanjia_b">
            <img style="width: 100%;" src="../../assets/img/A/3.png">
          </div>
          <div class="wanjia_c">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">加州租车</li>
              <li
                class="font-12 color-b"
                style="margin-top: 0.5rem;
                    margin-bottom: 0.5rem;"
              >阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--推荐行程2-->
    <div class="bao_zon">
      <!--热门租车-->
      <div class="bao_zon_a">
        <img src="../../assets/img/A/home_lvdz_bg@2x.png">
        <li class="bao_zon_b">
          <i class="font-18">推荐行程</i>
          <i class="font-12 color-b" style="margin-left: 0.5rem;">RECOMMMRRE</i>
        </li>
      </div>

      <div class="bao_her_a font-14 color-b" style="margin-top: 0px!important">
        <ul>
          <li>
            <i class="color-d">美国西部</i>
            <i class="bao_her_b"></i>
          </li>
          <li>
            <i>二级分类</i>
            <i></i>
          </li>
          <li>
            <i>三级分类</i>
            <i></i>
          </li>
        </ul>
      </div>
      <!---->
      <div
        class="Travel"
        :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}"
      >
        <div class="Travel_a">
          <div class="Travel_b">
            <div class="Travel_b_a font-14">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景胜美景旧金山行程二加优胜美景二加优胜美景</div>
            <div class="float_left">
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                   <i class="colobai  ">6个目的地，7个景点</i>
                </i>
              </li>
            </div>
            <div class="float_right font-10" style="margin-top: 0.2rem;">
              <div class="float_left">
                <i class="scenic_spot_a">
                  <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                </i>
                <i class="float_left">2017</i>
              </div>
              <div class="float_left">
                <i class="scenic_spot_a">
                  <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                </i>
                <i class="float_left">2017</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div class="bao_zon_zz">
        <div class="bao_zon_c">
          <div class="float_left gongs_b">
            <img style="width: 100%" src="../../assets/img/A/2.png">
          </div>
          <div class="float_right gongs_c">
            <ul>
              <li
                class="font-14 gongs_e"
                style="margin-top: 0.1rem"
              >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                </i>
                <i>6个目的地，7个旅游景点</i>
              </li>
              <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
      <div class="bao_zon_zz">
        <div class="bao_zon_c">
          <div class="float_left gongs_b">
            <img style="width: 100%" src="../../assets/img/A/2.png">
          </div>
          <div class="float_right gongs_c">
            <ul>
              <li
                class="font-14 gongs_e"
                style="margin-top: 0.1rem"
              >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                </i>
                <i>6个目的地，7个旅游景点</i>
              </li>
              <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--当季热门-->
    <div class="bao_zon">
      <!--当季热门-->
      <div class="bao_zon_a">
        <img src="../../assets/img/A/home_lvdz_bg@2x.png">
        <li class="bao_zon_b">
          <i class="font-18">当季热门</i>
          <i class="font-12 color-b" style="margin-left: 0.5rem;">RECOMMMRRE</i>
        </li>
      </div>

      <div class="bao_her_a font-14 color-b" style="margin-top: 0px!important">
        <ul>
          <li>
            <i class="color-d">美国西部</i>
            <i class="bao_her_b"></i>
          </li>
          <li>
            <i>二级分类</i>
            <i></i>
          </li>
          <li>
            <i>三级分类</i>
            <i></i>
          </li>
        </ul>
      </div>
      <!--当季热门内容-->
      <div class="bao_zon_zz">
        <div class="bao_zon_c">
          <div class="float_left gongs_b">
            <img style="width: 100%" src="../../assets/img/A/2.png">
          </div>
          <div class="float_right gongs_c">
            <ul>
              <li
                class="font-14 gongs_e"
                style="margin-top: 0.1rem"
              >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                </i>
                <i>6个目的地，7个旅游景点</i>
              </li>
              <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
      <div class="bao_zon_zz">
        <div class="bao_zon_c">
          <div class="float_left gongs_b">
            <img style="width: 100%" src="../../assets/img/A/2.png">
          </div>
          <div class="float_right gongs_c">
            <ul>
              <li
                class="font-14 gongs_e"
                style="margin-top: 0.1rem"
              >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                </i>
                <i>6个目的地，7个旅游景点</i>
              </li>
              <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
      <div class="bao_zon_zz">
        <div class="bao_zon_c">
          <div class="float_left gongs_b">
            <img style="width: 100%" src="../../assets/img/A/2.png">
          </div>
          <div class="float_right gongs_c">
            <ul>
              <li
                class="font-14 gongs_e"
                style="margin-top: 0.1rem"
              >旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
              <li class="font-12 color-b bao_zon_e">
                <i class="bao_zon_d">
                  <img src="../../assets/img/B/bczc_adress_icon@2x.png">
                </i>
                <i>6个目的地，7个旅游景点</i>
              </li>
              <li class="font-12 float_right color-b" style="margin-top: 0.2rem;">
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_eye2_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
                <i class="b_zong">
                  <i class="bao_zon_f">
                    <img src="../../assets/img/A/home_lydz_like_icon@2x.png">
                  </i>
                  <i class="float_left">2017</i>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
      <!--客服和广告-->
      <div class="kef_a bao_zon">
        <div class="float_left kef">
          <img style="width: 100% ;" src="../../assets/img/B/2.png">
        </div>
        <div class="float_right kef_b">
          <div
            class="kef_c"
            :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}"
          >
            <i class="float_left font-14 color">最新定制案例</i>
            <i class="float_right font-12 color">MOER>></i>
          </div>
          <div class="kef_d">
            <div class="float_left kef_d_a">
              <img style="width: 100%" src="../../assets/img/B/3.png">
            </div>
            <div class="float_right kef_d_b">
              <ul>
                <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b float_right">1分钟前</li>
              </ul>
            </div>
          </div>
          <div class="kef_d">
            <div class="float_left kef_d_a">
              <img style="width: 100%" src="../../assets/img/B/3.png">
            </div>
            <div class="float_right kef_d_b">
              <ul>
                <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b float_right">1分钟前</li>
              </ul>
            </div>
          </div>
          <div class="kef_d">
            <div class="float_left kef_d_a">
              <img style="width: 100%" src="../../assets/img/B/3.png">
            </div>
            <div class="float_right kef_d_b">
              <ul>
                <li class="font-12 color-b kef_d_c">旧金山行程二加优胜美景旧金山行程二加优胜美景旧金山行程二加优胜美景</li>
                <li class="font-12 color-b float_right">1分钟前</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="bao_zon">
      <div
        class="business_affairs_c"
        :style="{backgroundImage:'url(http://img17.3lian.com/d/file/201702/14/3d1d78481dbe5db4802f4b1eb548f365.jpg)'}"
      >
        <div class="font-20 color business_affairs_c_jia">BANNER</div>
      </div>

      <div class="b_xianm">
        <div class="font-14 b_xianm_jia">出发港口:</div>
        <ul class="font-12 b_xianm_b color-b">
          <li class="float_left">纽约</li>
          <li class="float_left">洛杉矶</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
        </ul>
      </div>
      <div class="b_xianm">
        <div class="font-14 b_xianm_jia">出发港口:</div>
        <ul class="font-12 b_xianm_b color-b">
          <li class="float_left">纽约</li>
          <li class="float_left">洛杉矶</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
        </ul>
      </div>
      <div class="b_xianm">
        <div class="font-14 b_xianm_jia">出发港口:</div>
        <ul class="font-12 b_xianm_b color-b">
          <li class="float_left">纽约</li>
          <li class="float_left">洛杉矶</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
          <li class="float_left">华盛顿</li>
          <li class="float_left">三亚</li>
        </ul>
      </div>
    </div>
    <!--当地玩家-->
    <div>
      <div class="gameplayer">
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs_icon@2x.png">
        </i>
        <div class="float_left font-14 gameplayer_a">当地玩家</div>
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs2_icon@2x.png">
        </i>
      </div>
      <div class="font-12 color-b gameplayer_d">
        更多
        <i>
          <img src="../../assets/img/A/home_ddwj_more_icon@2x.png">
        </i>
      </div>

      <div class="gameplayer_d_a">
        <ul class="font-14">
          <li class="gameplayer_d_b">纽约</li>
          <li>多伦多</li>
          <li>洛杉矶</li>
        </ul>
      </div>
      <!--玩家呢容-->
      <div class="wanjia">
        <div class="float_left wanjia_a gameplayer_e_a border_e">
          <div class="wanjia_c_jia">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
              <li class="font-12 color-b">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
              <li class="font-12 color-d" style="margin-top: 0.5rem;">
                <i class="wanjia_f">
                  <img src="../../assets/img/A/home_ddwj_adres_icon@2x.png">
                </i>美国·纽约
              </li>
            </ul>
          </div>
        </div>

        <div class="float_left wanjia_a gameplayer_e_a border_e">
          <div class="wanjia_c_jia">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
              <li class="font-12 color-b">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
              <li class="font-12 color-d" style="margin-top: 0.5rem;">
                <i class="wanjia_f">
                  <img src="../../assets/img/A/home_ddwj_adres_icon@2x.png">
                </i>美国·纽约
              </li>
            </ul>
          </div>
        </div>
        <div class="float_left wanjia_a gameplayer_e_a border_e">
          <div class="wanjia_c_jia">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
              <li class="font-12 color-b">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
              <li class="font-12 color-d" style="margin-top: 0.5rem;">
                <i class="wanjia_f">
                  <img src="../../assets/img/A/home_ddwj_adres_icon@2x.png">
                </i>美国·纽约
              </li>
            </ul>
          </div>
        </div>
        <div class="float_left wanjia_a gameplayer_e_a border_e">
          <div class="wanjia_c_jia">
            <img style="width: 100%; height: 100%;" src="../../assets/img/A/gant.png">
          </div>
          <div class="wanjia_d">
            <ul>
              <li class="font-14" style="margin-top: 0.3rem;">明星玩家·石头</li>
              <li class="font-12 color-b">阿拉莫公司建业1669年莫公司阿拉莫公司莫公司阿拉莫公司</li>
              <li class="font-12 color-d" style="margin-top: 0.5rem;">
                <i class="wanjia_f">
                  <img src="../../assets/img/A/home_ddwj_adres_icon@2x.png">
                </i>美国·纽约
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <!--当地玩家格式2-->
    <div>
      <div class="gameplayer">
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs_icon@2x.png">
        </i>
        <div class="float_left font-14 gameplayer_a">当地玩家</div>
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs2_icon@2x.png">
        </i>
      </div>
      <div class="font-12 color-b gameplayer_d">
        更多
        <i>
          <img src="../../assets/img/A/home_ddwj_more_icon@2x.png">
        </i>
      </div>

      <div class="gameplayer_d_a">
        <ul class="font-14">
          <li class="gameplayer_d_b">纽约</li>
          <li>多伦多</li>
          <li>洛杉矶</li>
        </ul>
      </div>
      <!--玩家呢容-->
      <div class="wanjia">
        <div class="wanjia_q">
          <div class="float_left wanjia_a border_a gameplayer_e_a">
            <div class="wanjia_b">
              <img src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14">明星玩家·石头</li>
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
          <div class="float_left wanjia_a border_a gameplayer_e_a">
            <div class="wanjia_b">
              <img src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14">明星玩家·石头</li>
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
          <div class="float_left wanjia_a border_a gameplayer_e_a">
            <div class="wanjia_b">
              <img src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14">明星玩家·石头</li>
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
          <div class="float_left wanjia_a border_a gameplayer_e_a">
            <div class="wanjia_b">
              <img src="../../assets/img/A/3.png">
            </div>
            <div class="wanjia_c">
              <img src="../../assets/img/A/gant.png">
            </div>
            <div class="wanjia_d">
              <ul>
                <li class="font-14">明星玩家·石头</li>
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
      </div>
      <!---->
    </div>
    <!--门票管理-->
    <!---->
    <!--目的地列表-->
    <div class="destination_z destination_ee">
      <div class="font-14 Order_d_b">目的地列表</div>
      <div class="font-14 destination_b color-b">
        <ul>
          <li class="destination_b_jia">美国</li>
          <li>中国</li>
          <li>加拿大</li>
          <li>新加波</li>
        </ul>
      </div>
      <!--城市列表-->
      <div class="destination_c">
        <div class="font-12">
          <div class="float_left destination_c_a color-d">A</div>
          <div class="float_left destination_c_b">
            <ul>
              <li>奥兰多</li>
              <li>奥克兰</li>
              <li>安大略</li>
            </ul>
          </div>
          <div class="float_left destination_c_a color-d">B</div>
          <div class="float_left destination_c_b">
            <ul>
              <li>波士顿</li>
              <li>缅因州。波特兰</li>
              <li>巴尔莫</li>
              <li>奥兰多</li>
              <li>奥克兰</li>
            </ul>
          </div>
          <div class="float_left destination_c_a color-d">C</div>
          <div class="float_left destination_c_b">
            <ul>
              <li>达拉斯</li>
              <li>佛诞</li>
            </ul>
          </div>
          <div class="float_left destination_c_a color-d">D</div>
          <div class="float_left destination_c_b">
            <ul>
              <li>尔湾</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <!--尾部门票管理-->
    <div class="bao_zon">
      <div class="gameplayer">
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs_icon@2x.png">
        </i>
        <div class="float_left font-14 gameplayer_a">门票管理</div>
        <i class="float_left">
          <img src="../../assets/img/A/home_rmzcgs2_icon@2x.png">
        </i>
      </div>

      <div class="gameplayer_b">
        <i></i>
        <span class="font-10 color-b float_left">FOLLOWING MORE DISPLAY</span>
        <i></i>
      </div>
      <div>
        <div class="weibu">
          <img src="../../assets/img/A/4.png">
        </div>
        <div class="weibu_a">
          <i>
            <img src="../../assets/img/A/5.png">
          </i>
          <i>
            <img src="../../assets/img/A/6.png">
          </i>
        </div>
      </div>
    </div>
    <!---->
    <!--尾部阳光质询-->
    <div class="yang color-b bao_zon">
      <ul>
        <li style="margin-left: 1%">
          <i class="yang_a">
            <img src="../../assets/img/A/home_dibu_ygzx_icon@2x.png">
          </i>
          <br>
          <i class="font-12">阳光质询</i>
        </li>
        <li>
          <i class="yang_a">
            <img src="../../assets/img/A/home_dibu_jm_icon@2x.png">
          </i>
          <br>
          <i class="font-12">加盟</i>
        </li>
        <li>
          <i class="yang_a">
            <img src="../../assets/img/A/home_dibu_fenx_icon@2x.png">
          </i>
          <br>
          <i class="font-12">分销</i>
        </li>
        <li>
          <i class="yang_a">
            <img src="../../assets/img/A/home_dibu_help_icon@2x.png">
          </i>
          <br>
          <i class="font-12">帮助</i>
        </li>
        <li style="margin-right: 1%">
          <i class="yang_a">
            <img src="../../assets/img/A/home_dibu_tyfk_icon@2x.png">
          </i>
          <br>
          <i class="font-12">体验反馈</i>
        </li>
      </ul>
    </div>
    <!---->
    <!--尾部阳光保证-->
    <div class="bao_zon">
      <div class="color-b xuan_yan border_a font-12">
        <div class="xuan_yan_b">
          <img style="width: 100%;" src="../../assets/img/B/6.png">
        </div>
        <ul>
          <li>
            <i class="xuan_yan_a">
              <img src="../../assets/img/A/home_dibu_ygbz_icon@2x.png">
            </i>
            <br>
            <i>阳光保证</i>
          </li>
          <li>
            <i class="xuan_yan_a">
              <img src="../../assets/img/A/home_dibu_cpff_icon@2x.png">
            </i>
            <br>
            <i>产品丰富</i>
          </li>
          <li>
            <i class="xuan_yan_a">
              <img src="../../assets/img/A/home_dibu_zyfw_icon@2x.png">
            </i>
            <br>
            <i>卓越服务</i>
          </li>
          <li>
            <i class="xuan_yan_a">
              <img src="../../assets/img/A/home_dibu_ygbz_icon@2x.png">
            </i>
            <br>
            <i>价格预订保障</i>
          </li>
        </ul>

        <div class="yang color-b xuan_yan_w">
          <ul>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_jdsjbz_icon@2x.png">
              </i>
              <br>
              <i class="font-12">酒店升级保障</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_hbywbz_icon@2x.png">
              </i>
              <br>
              <i class="font-12">航班延误保障</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_tsyytdbz_icon@2x.png">
              </i>
              <br>
              <i class="font-12">特殊原因退订保障</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_bkkltdbz_icon@2x.png">
              </i>
              <br>
              <i class="font-12">不可抗力退订保障</i>
            </li>
            <li>
              <i class="xuan_yan_a">
                <img src="../../assets/img/A/home_dibu_zdzhbz_icon@2x.png">
              </i>
              <br>
              <i class="font-12">重大灾害保障</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!---->
    <!--尾部合作伙伴-->
    <div class="bao_zon">
      <div class="font-16 hez_h">合作伙伴</div>
      <div class="hez_h_a">
        <img style="width: 100%" src="../../assets/img/A/home_ydjgbz_icon@2x.png">
      </div>
    </div>
    <!---->
    <!--尾部订单指南-->
    <div class="zinan bao_zon">
      <div class="zinan_a font-16">
        <ul>
          <li style="padding-left: 0px!important">
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b zinan_bd">
                <img src="../../assets/img/A/sign_open_icon@3x.png">
              </i>
              <i class="zinan_b zinan_bd_a yinc">
                <img src="../../assets/img/A/sign_open_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>
        </ul>
      </div>

      <div class="zinan_a font-16">
        <ul>
          <li style="padding-left: 0px!important">
            <i class="float_left">用户中心</i>
            <span class="float_right zinan_c">
              <i class="zinan_b zinan_bd">
                <img src="../../assets/img/A/sign_open_icon@3x.png">
              </i>
              <i class="zinan_b zinan_bd_a yinc">
                <img src="../../assets/img/A/sign_open_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>
        </ul>
      </div>

      <div class="zinan_a font-16">
        <ul>
          <li style="padding-left: 0px!important">
            <i class="float_left">帮助中心</i>
            <span class="float_right zinan_c">
              <i class="zinan_b zinan_bd">
                <img src="../../assets/img/A/sign_open_icon@3x.png">
              </i>
              <i class="zinan_b zinan_bd_a yinc">
                <img src="../../assets/img/A/sign_open_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>

          <li>
            <i class="float_left">订单指南</i>
            <span class="float_right zinan_c">
              <i class="zinan_b">
                <img src="../../assets/img/A/more_icon@2x.png">
              </i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!---->
    <!--最后尾部-->
     <div class="wan_zo">
        <div class="font-12 wan">
        	<ul>
        		<li class="wan_a"><img src="../../assets/img/A/sign_logo_icon@2x.png"></li>
        		<li class="wan_b"><i>万事同美国</i><i>eaiusa.com</i></li>
        	</ul>
        </div>
        <div class="wan_c font-12 ">
        	<i ><img src="../../assets/img/B/7.png"></i><i class="wan_d">关注微信公众号</i>
        </div>
       </div>

      <div class="wan_e">
      	<img style="width: 100%;" src="../../assets/img/B/8.png">
      </div>
       <div class="dib_w font-12 color-b">万事同美国eaiusa.com万事同美国eaiusa.com万事同美国eaiusa.com</div>
    <!---->
  </div>
</template>
<style lang="less" scoped>
.daohan{
   color: white!important;
 }
.bao_zon_e i{
   text-align: left;
  float: left;
 }
</style>

<script>
import ezHeader from '@/components/header.vue';
export default {
  name: "indexher",
  data() {
    return {};
  },
  components:{
    ezHeader,
  },
  methods: {}
};
</script>