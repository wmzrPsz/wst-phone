
import baseUrl from "./base";


export default async (url = '', data = {}, type = 'GET', method = 'fetch')=>{
  // 整理表单数据
  type = type.toUpperCase()
   let sendData
   let formData=new FormData();

  let param = {
    uid: localStorage.getItem('login_uid'),
    key: localStorage.getItem('login_key'),
    time: localStorage.getItem('login_time'),
    type: localStorage.getItem('login_uid') == undefined ? 1 : 2 ,
  };
  data = Object.assign(data,param);
  
  if (type == 'GET') {
    let _data = []
    Object.keys(data).forEach(key => {
      _data.push(key + '=' + data[key])
    })
    url = baseUrl + url + '?' + _data.join('&')
  } else {
    //sendData = JSON.stringify(data)
    Object.keys(data).forEach(key => {
      formData.append(key,data[key]);
    })
  }




  // 创建ajax提交对象

  if (window.fetch && method == 'fetch') {
    let reqConfig = {
      credentials: 'include',
      method: type,
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-type': 'application/json'
      // },
      mode: 'cors',
    //  cache: 'default',
      cache: 'no-cache',
    }
    if(type == "POST"){
    //  reqConfig = {...reqConfig,body: formData};
      let param = {body: formData}
      reqConfig = Object.assign(reqConfig, param);
    }
    try {
      const response = await fetch(url, reqConfig)
      const responseJson = await response.json()

      return responseJson
    } catch(error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let reqObj

      if (window.XMLHttpRequest) {
        reqObj = new XMLHttpRequest()
      } else {
        reqObj = new ActiveXObject('Microsoft.XMLHTTP')
      }

      reqObj.open(type, url, true)
      reqObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      reqObj.send(sendData)

      reqObj.onreadystatechange = () => {
        if (reqObj.readyState == 4) {
          if (reqObj.status == 200) {
            let res = reqObj.response
            if (typeof res !== 'object') {
              res = JSON.parse(res)
            }
            resolve(res)
          } else {
            reject(reqObj)
          }
        }
      }
    })
  } 

}


async function ajax(url = '', data = {}, type = 'GET', method = 'fetch'){
      const res = await Ajax(url,data,type,method);
      console.log(res);
      if(res.success){
        if(!res.body) return res.success;
        if(Object.keys(res.body).length == 1)
          return res.body[Object.keys(res.body)[0]];
        return res.body;
      }else{
        fnToast(res.msg);
        return false;
      }
}


//根据地址查询经纬度
async function getMap1(url){
  return new Promise((resolve, reject) => {
    $.get(url, function(result){
      if(result.status === '1' && result.info === 'OK'){
           let origin = result.geocodes[0].location;
           console.log("起始地经纬度："+origin);
           resolve(origin);
      }
      reject();
     })
  })
}

//根据经纬度查询地址
async function getMap2(url){
  return new Promise((resolve, reject) => {
    $.get(url, function(result){
      if(result.status === '1' && result.info === 'OK'){
        let discante = result.route.paths[0].distance;
       console.log( "距离："+discante);
       resolve(discante);
      }
      reject();
    })
  })
}



