import Vue from 'vue'
import Router from 'vue-router'


//公用
//评论
const comment = r => require.ensure([], () => r(require('../views/public/comment')), 'comment')
//用户质询全部评论
const information = r => require.ensure([], () => r(require('../views/public/information')), 'information')
//用户质询
const inquiry = r => require.ensure([], () => r(require('../views/public/inquiry')), 'inquiry')
//搜索页面
const search = r => require.ensure([], () => r(require('../views/public/search')), 'search')
//选择联系人页面
const tourist = r => require.ensure([], () => r(require('../views/public/tourist')), 'tourist')


const error = r => require.ensure([], () => r(require('../views/error/error')), 'error')
const login = r => require.ensure([], () => r(require('../views/index/login')), 'login')//登陆首页
const register = r => require.ensure([], () => r(require('../views/index/register')), 'register')//注册
const forget = r => require.ensure([], () => r(require('../views/index/forget')), 'forget')//忘记密码
const indexher = r => require.ensure([], () => r(require('../views/index/indexher')), 'indexher')//登陆进去的首页
const register_business = r => require.ensure([], () => r(require('../views/index/register_business')), 'register_business')//商家注册
const binding = r => require.ensure([], () => r(require('../views/index/binding')), 'binding')//绑定手机号码

//当地玩家
const sousuo = r => require.ensure([], () => r(require('../views/gameplayer/sousuo')), 'sousuo')//搜索当地玩家
//当地参团
const delegation = r => require.ensure([], () => r(require('../views/gameplayer/delegation')), 'delegation')//当地参团
//当地玩家
const game = r => require.ensure([], () => r(require('../views/gameplayer/game')), 'game')//当地玩家
//油轮
const Tanker = r => require.ensure([], () => r(require('../views/gameplayer/Tanker')), 'Tanker')//油轮
//景点
const Scenicspot = r => require.ensure([], () => r(require('../views/gameplayer/Scenicspot')), 'Scenicspot')//景点
//首页（弹出）
const sousuo_tan = r => require.ensure([], () => r(require('../views/gameplayer/sousuo_tan')), 'sousuo_tan')//首页（弹出）


////////////////////////////////个人中心质料////////////////////////////////////////////////////////////////////////
//个人中心质料index
const p_index = r => require.ensure([], () => r(require('../views/p/p_index')), 'p_index')
//个人中心消息
const p_news = r => require.ensure([], () => r(require('../views/p/p_news')), 'p_news')
//个人中心信息
const p_information = r => require.ensure([], () => r(require('../views/p/p_information')), 'p_information')
//个人中心我的订单
const p_order = r => require.ensure([], () => r(require('../views/p/p_order')), 'p_order')
//个人中心我的收藏
const p_collection = r => require.ensure([], () => r(require('../views/p/p_collection')), 'p_collection')
//个人中心我的收藏——常规路线
const p_collection_a = r => require.ensure([], () => r(require('../views/p/p_collection_a')), 'p_collection_a')
//个人中心我的收藏——当地参团
const p_collection_b = r => require.ensure([], () => r(require('../views/p/p_collection_b')), 'p_collection_b')
//个人中心我的收藏——当地玩家
const p_collection_c = r => require.ensure([], () => r(require('../views/p/p_collection_c')), 'p_collection_c')
//个人中心我的收藏——邮轮
const p_collection_d = r => require.ensure([], () => r(require('../views/p/p_collection_d')), 'p_collection_d')
//个人中心我的收藏——景点
const p_collection_e = r => require.ensure([], () => r(require('../views/p/p_collection_e')), 'p_collection_e')
//个人中心我的草稿
const p_draft = r => require.ensure([], () => r(require('../views/p/p_draft')), 'p_draft')
//个人中心财务管理
const p_finance = r => require.ensure([], () => r(require('../views/p/p_finance')), 'p_finance')
//个人中心联系人
const p_contacts = r => require.ensure([], () => r(require('../views/p/p_contacts')), 'p_contacts')
//个人中心添加联系人
const p_contacts_a = r => require.ensure([], () => r(require('../views/p/p_contacts_a')), 'p_contacts_a')
//个人中心关于我们
const p_about = r => require.ensure([], () => r(require('../views/p/p_about')), 'p_about')
//个人中心关于我们_公司概括
const p_about_a = r => require.ensure([], () => r(require('../views/p/p_about_a')), 'p_about_a')

///////////////////////////////////////////////B包车租车//////////////////////////////////////////////////////////////////////
//包车租车首页
const B_index = r => require.ensure([], () => r(require('../views/B/B_index')), 'B_index')

///////////////////////////////////////////////F常规路线//////////////////////////////////////////////////////////////////////
//
const F_index = r => require.ensure([], () => r(require('../views/F/F_index')), 'F_index')
//f常规路线搜索详情列表
const F_details = r => require.ensure([], () => r(require('../views/F/F_details')), 'F_details')
//常规路线详情
const F_details_page = r => require.ensure([], () => r(require('../views/F/F_details_page')), 'F_details_page')
//常规路线预订
const F_book = r => require.ensure([], () => r(require('../views/F/F_book')), 'F_book')
//订单
const orderlist = r => require.ensure([], () => r(require('../views/F/orderlist')), 'orderlist')
//确认订单
const orderlist_a = r => require.ensure([], () => r(require('../views/F/orderlist_a')), 'orderlist_a')
//订单详情
const orderlist_b = r => require.ensure([], () => r(require('../views/F/orderlist_b')), 'orderlist_b')
//完成订单
const orderlist_c = r => require.ensure([], () => r(require('../views/F/orderlist_c')), 'orderlist_c')
///////////////////////////////////////////////G当地参团//////////////////////////////////////////////////////////////////////
//当地参团主页
const G_index = r => require.ensure([], () => r(require('../views/G/G_index')), 'G_index')
//当地参团列表
const G_details = r => require.ensure([], () => r(require('../views/G/G_details')), 'G_details')
//当地参团详情
const G_details_page = r =>require.ensure([],() => r(require('../views/G/G_details_page')),'G_details_page')
////////////////////////////////////////////////H——当地玩家//////////////////////////////////////////////////////////////////////////////
const H_index = r =>require.ensure([],() => r(require('../views/H/H_index')),'H_index')
//当地玩家
const H_game = r => require.ensure([], () => r(require('../views/H/H_game')), 'H_game')//当地玩家
const H_detail = r => require.ensure([], () => r(require('../views/H/H_detail')), 'H_detail')//当地玩家详情
/////////////////////////////////////////////////K——油轮//////////////////////////////////////////////////////////////////////////////////
const K_index = r => require.ensure([], () => r(require('../views/K/K_index')), 'K_index')//油轮主页
const K_tanker = r => require.ensure([], () => r(require('../views/K/K_tanker')), 'K_tanker')//油轮列表
const K_details_page = r => require.ensure([], () => r(require('../views/K/K_details_page')), 'K_details_page')//油轮详情
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: error,
      meta: { "title": 404 }
    },
    {
      path: '/',
      name: 'root',
      component: indexher,
      //  redirect: 'login',
      meta: { 'title': '首页' }
    },
     //评论
     {
      path:'/comment/:routeid:proType',
      name:'comment',
      component:comment,
      meta:{'title':'全部评论'}
    },
     //用户资讯全部评论
     {
      path:'/information/:routeid:proType',
      name:'information',
      component:information,
      meta:{'title':'用户资讯全部评论'}
    },
     //用户质询
     {
      path:'/inquiry/:routeid:proType',
      name:'inquiry',
      component:inquiry,
      meta:{'title':'用户质询'}
    },
      //搜索页面
      {
        path:'/search',
        name:'search',
        component:search,
        meta:{'title':'常规路线搜索'}
      },
      //选择联系人
      {
        path:'/tourist/:zonchoiceperson',
        name:'tourist',
        component:tourist,
        meta:{'tele':'选择联系人'}
      },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { 'title': '登录' },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { 'title': '注册' }
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta: { 'title': '忘记密码' }
    },
    {
      path: '/indexher',
      name: 'indexher',
      component: indexher,
      meta: { 'title': '首页' }
    },
    {
      path: '/register_business',
      name: 'register_business',
      component: register_business,
      meta: { 'title': '商家注册' }
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding,
      meta: { 'title': '绑定' }
    },
    //当地玩家
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo,
      meta: { 'title': '搜索' }
    },
    //首页（弹出）
    {
      path: '/sousuo_tan',
      name: 'sousuo_tan',
      component: sousuo_tan,
      meta: { 'title': '首页(弹出)' }
    },
    //delegation搜索当地参团
    {
      path: '/delegation',
      name: 'delegation',
      component: delegation,
      meta: { 'title': '搜索当地参团' }
    },
    //搜索当地玩家
    {
      path: '/game',
      name: 'game',
      component: game,
      meta: { 'title': '搜索当地玩家' }
    },
    //搜索油轮
    {
      path: '/Tanker',
      name: 'Tanker',
      component: Tanker,
      meta: { 'title': '搜索油轮' }
    },

    //搜索景点
    {
      path: '/Scenicspot',
      name: 'Scenicspot',
      component: Scenicspot,
      meta: { 'title': '搜索景点' }
    },
    //个人中心质料
    {
      path: '/p_index',
      name: 'p_index',
      component: p_index,
      meta: { 'title': '个人中心质料' }
    },
     //个人中心消息
     {
      path: '/p_news',
      name: 'p_news',
      component: p_news,
      meta: { 'title': '个人中心消息' }
    },
      //个人中心信息
      {
        path: '/p_information',
        name: 'p_information',
        component:p_information,
        meta: { 'title': '个人中心信息' }
      },
      //个人中心我的订单
      {
        path:'/p_order',
        name:'p_order',
        component:p_order,
        meta:{'title':'我的订单'}
      },
      //我的收藏
      {
        path:'/p_collection',
        name:'p_collection',
        component:p_collection,
        meta:{'title':'我的收藏'}
      },
       //我的收藏-常规路线
       {
        path:'/p_collection_a',
        name:'p_collection_a',
        component:p_collection_a,
        meta:{'title':'我的收藏_常规路线'}
      },
        //我的收藏-当地参团
        {
          path:'/p_collection_b',
          name:'p_collection_b',
          component:p_collection_b,
          meta:{'title':'我的收藏_当地参团'}
        },
         //我的收藏-当地玩家
         {
          path:'/p_collection_c',
          name:'p_collection_c',
          component:p_collection_c,
          meta:{'title':'我的收藏_当地玩家'}
        },
        //我的收藏-邮轮
        {
          path:'/p_collection_d',
          name:'p_collection_d',
          component:p_collection_d,
          meta:{'title':'我的收藏_邮轮'}
        },
         //我的收藏-景点
         {
          path:'/p_collection_e',
          name:'p_collection_e',
          component:p_collection_e,
          meta:{'title':'我的收藏_景点'}
        },
        //我的草稿
        {
          path:'/p_draft',
          name:'p_draft',
          component:p_draft,
          meta:{'title':'我的草稿'}
        },
        //我的财务管理
        {
          path:'/p_finance',
          name:'p_finance',
          component:p_finance,
          meta:{'title':'我的财务管理'}
        },
        //我的联系人
        {
          path:'/p_contacts',
          name:'p_contacts',
          component:p_contacts,
          meta:{'title':'我的联系人'}
        },
         //添加联系人
         {
          path:'/p_contacts_a/:typlis',
          name:'p_contacts_a',
          component:p_contacts_a,
          meta:{'title':'添加联系人'}
        },
        //关于我们
        {
          path:'/p_about',
          name:'p_about',
          component:p_about,
          meta:{'title':'关于们'}
        },
         //关于我们公司概括
         {
          path:'/p_about_a',
          name:'p_about_a',
          component:p_about_a,
          meta:{'title':'关于们公司概括'}
        },
        /////////////////////////包车出车///////////////////////////////
        //包车租车首页
        {
          path:'/B_index',
          name:'B_index',
          component:B_index,
          meta:{'title':'包车租车'}
        },
        /////////////////////////常规路线///////////////////////////////
        //搜索常规路线
        {
          path:'/F_index',
          name:'F_index',
          component:F_index,
          meta:{'title':'常规路线搜索'}
        },
       //搜索进去详情列表
       {
        path:'/F_details',
        name:'F_details',
        component:F_details,
        meta:{'title':'常规路线列表'}
      },
      //常规路线详情
      {
        path:'/F_details_page/:routeid',
        name:'F_details_page',
        component:F_details_page,
        meta:{'title':'常规路线详情'}
      },
      // //预订
      {
        path:'/F_book/:routeid/:price',
        name:'F_book',
        component:F_book,
        meta:{'title':'预订'}
      },
      //订单
      {
        path:'/orderlist/:date/:adult/:child/:One/:two/:three/:four/:arrange/:pricetyps/:routeid',
        name:'orderlist',
        component:orderlist,
        meta:{'title':'订单'}
      },
      //确认订单
      {
        path:'/orderlist_a/:routeid/:zonmni',
        name:'orderlist_a',
        component:orderlist_a,
        meta:{'title':'订单详情'}
      },
      //订单详情
      {
        path:'/orderlist_b/:routeid',
        name:'orderlist_b',
        component:orderlist_b,
        meta:{'title':'订单详情'}
      },
       //完成订单
       {
        path:'/orderlist_c/:routeid',
        name:'orderlist_c',
        component:orderlist_c,
        meta:{'title':'完成订单'}
      },
      //////////////////////////////////////当地参团//////////////////////////////////////////////
      //当地参团
      {
        path:'/G_index',
        name:'G_index',
        component:G_index,
        meta:{'title':'当地参团'}
      },
      //参团列表
      {
        path:'/G_details',
        name:'G_details',
        component:G_details,
        meta:{'title':'当地参团'}
      },
       //参团详情
       {
        path:'/G_details_page/:routeid',
        name:'G_details_page',
        component:G_details_page,
        meta:{'title':'当地参团'}
      },
      /////////////////////////////////////H当地玩家//////////////////////////////////////
      {
        path:'/H_index',
        name:'H_index',
        component:H_index,
        meta:{'title':'当地玩家'}
      },
         //搜索当地玩家
    {
      path: '/H_game',
      name: 'H_game',
      component:H_game,
      meta: { 'title': '搜索当地玩家' }
    },
    {
      path:'/H_detail/:routeid',
      name:'H_detail',
      component:H_detail,
      meta:{'title':'当地玩家详情'}
    },
    ///////////////////////////油轮////////////////////////////////////
    {
      path:'/K_index',
      name:'K_index',
      component:K_index,
      meta:{'title':'油轮'}
    },
    //油轮列表
    {
      path:'/K_tanker/',
      name:'K_tanker',
      component:K_tanker,
      meta:{'title':'油轮'}
    },
    //油轮详情
    {
      path:'/K_details_page/:lineid',
      name:'K_details_page',
      component:K_details_page,
      meta:{'title':'油轮详情'}
    },
  ]
})
