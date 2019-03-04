import ajax from '../config/fetch';
import md5 from 'js-md5';


//登录
export const login = (phone, passWord) => ajax('/api/forlogin/login', {
                phone: phone,
                passWord: md5(passWord)
});

