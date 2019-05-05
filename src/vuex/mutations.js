
const mutations = {
  // passwtyp(state,routeid) {
  //   state.routeid= routeid;
  //   console.log( state.routeid);
  // },
    //登录
    addLogin(state,data){
      [state.loginUid, state.loginKey, state.loginTime, state.loginType] = [data.uid, data.key, data.time, 2];
      console.log(state.loginUid,state.loginKey,state.loginTime);
    },
    //退出登录
    removeLogin(state){
      console.log("退出登录");
      [state.loginUid, state.key, state.loginTime, state.loginType] = ['','','',1];
      console.log(state.loginUid,state.loginKey,state.loginTime);
    },
    //语言改变
    changeLanguage(state, languageid){
      state.languageid = languageid;
      console.log(state.languageid );
    },
    //货币改变
    changeCurrency(state, currencyid){
      state.currencyid = currencyid;
      console.log(state.currencyid );
    },
    //设置网站基本参数
    setComProtocol(state, comProtocol) {
      state.comProtocol = comProtocol;
    },
    //语言list改变
    languageListChange(state,  languageList) {
      state.languageList = languageList
    },
    //货币集合改变
    currencyListChange(state, currencyList){
      state.currencyList = currencyList;
    },
    //设置会员信息
    setMember(state, member) {
      state.member = member;
    },
}

export default mutations