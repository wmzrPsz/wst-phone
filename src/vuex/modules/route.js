const state = {
  Routineroute: {},//常规路线详情  
  Price: {},//订单房间价格
  contacts: {},//修改联系人 
  Selection: [],//确定的信息人数
}
const getters = {
}
const mutations = {
  passwtyp(state, slist) {
    state.Routineroute = slist;
  },
  Price(state, Price) {
    state.Price = Price;
  },
  contacts(state, list) {
    state.contacts = list;
  },
  Selection(state, Selection) {
    state.Selection = Selection;
    console.log(state.Selection);
  },

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

