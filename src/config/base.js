//let imgBaseUrl = process.env.API_ROOT; 
 let path = "";

if (process.env.NODE_ENV == 'development') {
   // path = 'http://47.105.70.4:8989/meiguotong/a/interface/';
    path = 'http://localhost:8080/meiguotong/a/interface/';

}else if(process.env.NODE_ENV == 'production'){
    path = 'http://47.105.70.4:8989/meiguotong/a/interface/';
}

module.exports = {
	path,
    // imgBaseUrl
}