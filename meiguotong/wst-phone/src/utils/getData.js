import ajax from '../config/fetch';
import md5 from 'js-md5';


//登录
export const login = (phone, passWord) => ajax('/api/forlogin/login', {
                phone: phone,
                passWord: md5(passWord)
});
//注册
export const register = (type,mobile,area,smsCode,passWord) => ajax('/api/forlogin/registered', {
    createType:type,//
    mobile:mobile,//手机号码
    area:area,//区域
    smsCode:smsCode,//验证码
    passWord: md5(passWord)
});
