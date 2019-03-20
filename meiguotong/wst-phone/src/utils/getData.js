import ajax from '../config/fetch';
import md5 from 'js-md5';
import {imgUpload} from "@/utils/common"

//登录
export const login = (phone, passWord) => ajax('/api/forlogin/login', {
                phone: phone,
                passWord: md5(passWord)
});
//注册
export const register = (type,mobile,email,smsCode,passWord,area,) => ajax('/api/forlogin/register', {
    createType:type,//
    phone:mobile,//手机号码
    email:email,//邮箱号码
    area:area,//区域
    smsCode:smsCode,//验证码
    version:1,//写死1普通用户2旅游社
    passWord: md5(passWord),
    category: 1,
    source:3,
});
//邮箱和短信
export const sendSms = (mobile,email,type,area)=> ajax('/api/forlogin/sendSms',{
    mobile:mobile,
    email:email,
    category:type,
    sendType:type,
    category:type,
    area:89,
    type:1,
    source:1,
    area:area,
});
//找回密码
export const fordet = (type,moib,smsCo,passWord)=> ajax('api/forlogin/updatePassword',{
    findType:type,//判断1是手机2是邮箱
    mobile:moib,//账号
    smsCode:smsCo,//验证码
    category:3,
    source:1,
    newPassword: md5(passWord),
});
//首页

//绑定手机或邮箱
export const bind = (type,mobile,email,smsCode,passWord,area,) => ajax('/api/forlogin/bindNew', {
    createType:type,//
    phone:mobile,//手机号码
    email:email,//邮箱号码
    area:area,//区域
    smsCode:smsCode,//验证码
    version:1,//写死1普通用户2旅游社
    passWord: md5(passWord),
    category: 1,
    source:3,
});
//获取自定标签
export const zhiding =(routeType) => ajax('/api/common/getLabel',{
    routeType:routeType,
})
//常规路线搜索接口
export const seledin = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid, pageNo) => ajax('/api/route/selectRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//当地参团搜索接口
export const selectttpy = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid, pageNo) => ajax('/api/route/selectCityRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//当地玩家
export const wanjia = (guideAge,guideSex,shuxin,minPrice,maxPrice,pageNo) => ajax('/api/guide/guideScreen',{
    guideAge:guideAge,//年龄
    guideSex:guideSex,//性别
    minPrice:minPrice,//低价
    maxPrice:maxPrice,//高价
    tagId:shuxin,//制订标签属性
    pageNo: pageNo,
});
//油轮接口
export const youlun = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid,startCity,hangxianty,pageNo) => ajax('/api/cruise/cruiseScreen', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    startCity:startCity,//出发城市ID
    route:hangxianty,//航线ID
    pageNo: pageNo,
},'post');
//景点接口
export const jingdian = (cityid,tagContent,srtype,pageNo) => ajax('/api/scenic/selectScenicList',{
    cityid:cityid,//城市ID
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    labelAttrid:tagContent,//属性ID
    pageNo: pageNo,
});
//景点选择城市接口/根据语言获取城市和城市景点数量接口
export const jdchengshi = () => ajax('/api/scenic/getCityScenicNum',{

});
//获取邮轮航线接口
export const gankou = () => ajax('/api/cruise/getCourse',{
  
});
//根据语言获取出发城市接口
export const chengshi = () => ajax('/api/common/getCityList',{

});
//获取途径 景点
export const  getScenicByCity = () => ajax('/api/common/getScenicByCity',{
    cityid:1,//城市ID
});
//获取首页导航栏
export const getComNavigation = () =>ajax('/api/common/getComNavigation',{
})
//获取热门城市
export const HotCityList = () =>ajax('/api/common/getHotCity',{
})
//获取语言
export const getLanguage = () =>ajax('/api/common/getLanguage',{
})
//获取货币
export const getCurrency = () =>ajax('/api/common/getCurrency',{
})
//获取基本参数
export const getProtocol = () =>ajax('/api/common/getProtocol',{
})
//获取个人（旅行社）信息/个人质料
export const Material = () =>ajax('/api/member/myInfor',{
})
//获得个人消息
export const xiaoxi = (pageNo) =>ajax('/api/member/getCompush',{
    pageNo:pageNo
})
//获得个人评论消息
export const pinglun = (pageNo) =>ajax('/api/member/getComment',{
    pageNo:pageNo
})
//图片上传
export const imgUp = () => imgUpload('/api/common/imgUpload')

