import ajax from '../config/fetch';
import md5 from 'js-md5';


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
//常规路线搜索接口
export const seledin = (date,daysty,srtype,minPrice,maxPrice) => ajax('/api/route/selectRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    languageid:1,//语言
    pageSize: 10,
    pageNo: 1,

},'post');