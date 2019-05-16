const state = {
  Routineroute: {},//常规路/参团线详情  
  Price: {},//订单房间价格
  contacts: {},//修改联系人 
  Selection: [],//确定的信息人数
  gameplayer:{},//当地玩家详情
  stycan:{},//当地玩家推荐路线
  Liner:{},//邮轮详情
  Tanker:[],//油轮房间
  spotlist:{},//景点
}
const getters = {
}
const mutations = {
  passwtyp(state, slist) {
    state.Routineroute = slist;
  },
  gameplayer(state,slist){
    state.gameplayer=slist;
  },
  Price(state, Price) {
    state.Price = Price;
  },
  contacts(state, list) {
    state.contacts = list;
  },
  Selection(state, Selection) {
    state.Selection = Selection;
  },
  Recommendlist(state,stycan){
    state.stycan=stycan;
  },
  Liner(state,Linerlist){
    state.Liner=Linerlist;
  },
  Tanker(state,Tanker){
    state.Tanker=Tanker;
  },
  spotlist(state,telist){
    state.spotlist=telist;
    console.log(state.spotlist)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

