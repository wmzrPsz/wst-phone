import ajax from '../config/ajax';
import md5 from './md5';


export const login = (phone, passWord) => ajax('/forlogin/login', {
                phone: phone,
                passWord: md5.hex_md5(passWord)
});