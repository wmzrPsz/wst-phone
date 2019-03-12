
//性别过滤器
export let sexVc = value => {
    if (!value) return '';
    if(value == 1 ) return "男"; return "女";
}

//证件类型过滤器
export let certTypeVc = value => {
    if (!value) return '';
    let content = "";
    switch (value) {
        case 1:  content = "身份证";  break;
        case 2:  content = "护照";    break;      
        case 3:  content = "本地ID";  break;
    }
    return content;
}


//导游类型过滤器
export let guideTypeVc = value => {
    if (!value) return '';
    let content = "";
    switch (parseInt(value)) {
        case 1:  content = "当地玩家";  break;
        case 2:  content = "定制旅游-导游";    break;      
        case 3:  content = "定制旅游-司兼导";  break;
        case 4:  content = "包车/租车-导游";  break;
        case 5:  content = "包车/租车-司兼导";  break;
    }
    return content;
}

//车辆等级过滤器
export let carLevelVc = value => {
    if (!value) return '';
    let content = "";
    switch (parseInt(value)) {
        case 1:  content = "一般";  break;
        case 2:  content = "舒适";    break;      
        case 3:  content = "很舒适";  break;
        case 4:  content = "非常舒适";  break;
    }
    return content;
}

//截取逗号拼接的第n个
export let splitVc = (value,index) => {
    if(!value) return "";  
    return value.split(",")[index];
}

//星级转化百分比
export let perVc = value => {
    if(!value) return''; return parseInt(value/5*100);
}

//分钟转小时分钟
export let dayDateByHour = minute => {
    if(!minute) return "";
    return `${minute/60 >> 0}小时${minute%60 > 0 ? minute%60 +"分钟":""}`;
}

// //网站默认图片
// Vue.filter('defImg', function (value) {
//     if(!value){
//          return Vue.prototype.defaultImg; 
//     } return value;
// })

// //网站默认头像
// Vue.filter('defPhoto', function (value) {
//     if(!value){
//     //     return app.defaultPhoto; 
//          return Vue.prototype.defaultPhoto; 
//     } return value;
// })
