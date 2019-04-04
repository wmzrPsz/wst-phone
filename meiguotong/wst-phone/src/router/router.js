import Vue from 'vue'
import Router from 'vue-router'

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
const b_index = r => require.ensure([], () => r(require('../views/B/b_index')), 'b_index')

///////////////////////////////////////////////F常规路线//////////////////////////////////////////////////////////////////////
//
const F_index = r => require.ensure([], () => r(require('../views/F/F_index')), 'F_index')
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
          path:'/p_contacts_a',
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
          path:'/b_index',
          name:'b_index',
          component:b_index,
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

  ]
})