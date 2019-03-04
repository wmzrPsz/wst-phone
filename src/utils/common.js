
//  const cityName = localStorage.getItem("cityName");
//  const map = localStorage.getItem("map");
// //  const cityName = "广州市";
// //  const map = "113.377355,23.132797";
 
 

// //判断是否登录
// function fnIsLogin() {
//     let login_uid = window.localStorage.getItem('login_uid');
//     console.log("login_uid======" + login_uid);
//     if (login_uid == undefined || login_uid == "" || login_uid == null || login_uid == "undefined") {
//         return false;
//     }
//     return true;
// }

// //判断手机号是否正确
// function isPoneAvailable(str) {
//      return !(/^[1][3,4,5,7,8][0-9]{9}$/.test(str));
// }

// //判断是否为空
export const isNull = (str)=> {
     return (str == '' || str == "" || str == null || str == undefined || str == "undefined");
}




// //判断是否为空
// function isNullAry(str) {
//     let flag = false;
//     for(const list in str){
//       if(isNull(str[list])){
//         flag = true;
//         break;
//       }
//     }
//      return flag;
// }

// //弹窗
// function fnToast(content,end = ()=>{}){
//   layer.open({
//     content: content,
//     skin: 'msg',
//     time: 2, //2秒后自动关闭
//     end: end
//   });
// }


// //获取年月
// function nowMonth(num = 0){
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   if (month < 10) {
//       month = "0" + month;
//   }
//   return year + "-" + month;
// }


// //获取当前时间
// function nowDate(num = 0, date = new Date()){
//  // let date = new Date();
//   date.setDate(date.getDate() + parseInt(num));//获取AddDayCount天后的日期 
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   if (month < 10) {
//       month = "0" + month;
//   }
//   if (day < 10) {
//       day = "0" + day;
//   }
//   return year + "-" + month + "-" + day;
// }


// //获取数组格式时间
// function nowDateByAny(){
//   let date = new Date();
//   let list = [];
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   if (month < 10) {
//       month = "0" + month;
//   }
//   if (day < 10) {
//       day = "0" + day;
//   }
//   list.push(year);
//   list.push(month);
//   list.push(day);
//   return list;
// }

// //获取当前时间
// function getBeginDate(){
//   let hour = new Date().getHours();
//   if(hour > 12){
//     return new Date(nowDate(1));
//   }else{
//     return new Date();
//   }
// }

// //截取参数
// function getStr(name) { 
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
//   var r = window.location.search.substr(1).match(reg); 
//   if (r != null) return unescape(r[2]); 
//   return ""; 
// } 


// //订单状态过滤器
// Vue.filter('statusVc', function (value) {
//   if (!value) return '';
//   let content = "";
//   switch (value) {
//       case 1:  content = "待支付";  break;
//       case 2:  content = "待接单";  break;      
//       case 3:  content = "待服务";  break;
//       case 4:  content = "服务中";  break;
//       case 5:  content = "待评价";  break;
//       case 6:  content = "已评论";  break;
//       case 7:  content = "企业取消";  break;
//       case 8:  content = "派单中";  break;
//       case 9:  content = "客户取消";  break;
//       case 10:  content = "服务人员取消";  break;
//       case 11:  content = "服务人员待接单";  break;
//   }
//   return content;
// })

// //支付类型过滤器
// Vue.filter('payTypeVc', function (value) {
//   if (!value) return '';
//   let content = "";
//   switch (value) {
//       case 1:  content = "未支付";  break;
//       case 2:  content = "微信支付";  break;      
//       case 3:  content = "余额支付";  break;
//   }
//   return content;
// })



// //生成随机函数
// function RndNum(n){
//   var rnd="";
//   for(var i=0;i<n;i++)
//       rnd+=Math.floor(Math.random()*10);
//   return rnd;
// }


// //判断是否是微信浏览器的函数
// function isWeiXin(){
//   //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
//   var ua = window.navigator.userAgent.toLowerCase();
//   //通过正则表达式匹配ua中是否含有MicroMessenger字符串
//   if(ua.match(/MicroMessenger/i) == 'micromessenger'){
//     return true;
//   }else{
//      return false;
//   }
// }

// //转码bse64
// function Base64(result){
//   imgSrc = result.replace("data:image/jpg;base64,", "");
//   imgSrc = result.replace("data:image/png;base64,", "");
//   imgSrc = result.replace("data:image/jpeg;base64,", "");
//   return imgSrc;
// }

// //上传图片
// async function imgUpload(event){
//   return new Promise((resolve, reject) => {
//     let file = event.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function (e) {
//       console.log( e.target.result);
//       resolve(ajax(imgUploadUrl,{"file": Base64(e.target.result)},"POST")) 
//     }
//   })
// }