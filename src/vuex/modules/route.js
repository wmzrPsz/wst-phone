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
  pathlist:{},//包车租车index页填写的信息
  piaylist:[],//游玩类型列表
  holetroom:{},//包车租车常规类型选择酒店
  roomlist:[],//包车租车选中房间的列表
  vehicledata:[],//包车租车选中车辆的列表
  guidetyplistyp:[],//包车租车选中的导游
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
  },
  rebcar(state,pathlist){
   state.pathlist=pathlist
  },
  piaylist(state,piaylist){
    state.piaylist=piaylist
  },
  holetroom(state,holetroom){
    state.holetroom=holetroom;
  },
  roomtyp(state,roomlist){
    state.roomlist=roomlist;
    console.log(state.roomlist);
  },
  vehicledata(state,vehicledata){
    state.vehicledata=vehicledata;
  },
  guidetyplistyp(state,guidetyplistyp){
    state.guidetyplistyp=guidetyplistyp;
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

