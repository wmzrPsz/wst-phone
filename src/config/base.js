//let imgBaseUrl = process.env.API_ROOT; 
 let path = "";

if (process.env.NODE_ENV == 'development') {  //开发环境
    path = 'http://47.105.70.4:8989/meiguotong/a/interface/';
    //path = 'http://192.168.1.201:8080/meiguotong/a/interface/';
}else if(process.env.NODE_ENV == 'production'){  //生成环境
    path = 'http://47.105.70.4:8989/meiguotong/a/interface/';
}

module.exports = {
	path,
    // imgBaseUrl
}