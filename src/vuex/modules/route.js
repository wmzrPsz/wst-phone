const state = {
  Routineroute:{},//常规路线详情  
  Price:{},//订单房间价格 
}

const getters = {

}

const mutations = {
  passwtyp(state,slist) {
    state.Routineroute=slist;
    console.log(state.Routineroute);
  },
  Price(state,Price){
    state.Price=Price;
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

