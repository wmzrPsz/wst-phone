import ajax from './fetch';
import md5 from 'js-md5';
import {imgUpload} from "@/utils/common"

//登录
export const login = (phone, passWord) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/login', {
                phone: phone,
                passWord: md5(passWord)
});
//注册
export const register = (type,mobile,email,smsCode,passWord,area,) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/register', {
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
export const sendSms = (mobile,email,type,area)=> ajax( process.env.VUE_APP_PROXY_API +'/forlogin/sendSms',{
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
export const bind = (type,mobile,email,smsCode,passWord,area,) => ajax( process.env.VUE_APP_PROXY_API +'/forlogin/bindNew', {
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
export const zhiding =(routeType) => ajax( process.env.VUE_APP_PROXY_API +'/common/getLabel',{
    routeType:routeType,
})
//退款说明接口
export const refundInforUrl =(routeType,priceDate) => ajax( process.env.VUE_APP_PROXY_API +'/common/refundInfor',{
    productid:routeType,
    productType:priceDate,
})
//保险说明
export const getInsuranceUrl =(productType) => ajax( process.env.VUE_APP_PROXY_API +'/common/getInsurance',{
    productType:productType,
})
//常规路线搜索接口
export const seledin = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid, pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/route/selectRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    scenic:scenicSpotid,//景点Id
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//常规路线生成订单接口
export const saveRouteOrderUrl =(routeid,contactsName,contactsMobile,remark,date,adult,child,One,two,three,four,arrange,insuranceid,Selection) => ajax( process.env.VUE_APP_PROXY_API +'/route/saveRouteOrder',{
    routeid:routeid,
    contactsName:contactsName,//联系人
    contactsMobile:contactsMobile,//联系电话
    remark:remark,//备注
    startDate:date,//出发时间
    adultNum:adult,//大人
    childNum:child,//小孩
    oneNum:One,//单人间
    twoNum:two,
    threeNum:three,
    fourNum:four,
    arrangeNum:arrange,
    insuranceid:insuranceid,//保险id
    orderMember:Selection,
},'post');
//常规路线/参团日期价格接口
export const getRoutePriceDetailsUrl = (routeid,priceDate) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getRoutePriceDetails',{
    routeid:routeid,
    priceDate:priceDate
})
//添加购物车
export const saveCarUrl = (routeid,carType) =>ajax(process.env.VUE_APP_PROXY_API +'/common/saveCar',{
    typeid:routeid,
    carType:carType

})
//当地参团搜索接口
export const selectttpy = (date,tagContent,daysty,srtype,minPrice,maxPrice, pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/route/selectCityRoute', {
    date:date,//日期
    day:daysty,//天数
    minPrice:minPrice,//最小价格
    maxPrice:maxPrice,//最大价格
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    labelAttrid:tagContent,//属性
    pageNo: pageNo,
},'post');
//当地参团接口
export const getCityRouteDetailsUrl = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getCityRouteDetails',{
    routeid:routeid,
    
})
//当地玩家
export const wanjia = (guideAge,guideSex,shuxin,minPrice,maxPrice,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/guide/guideScreen',{
    guideAge:guideAge,//年龄
    guideSex:guideSex,//性别
    minPrice:minPrice,//低价
    maxPrice:maxPrice,//高价
    tagId:shuxin,//制订标签属性
    pageNo: pageNo,
});
//当地玩家详情
export const guideDetailsUrl = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/guide/guideDetails',{
    guideId:routeid,
    
})
//当地玩家推荐路线列表接口
export const guideRouteUrl = (routeid,currentPage) =>ajax( process.env.VUE_APP_PROXY_API +'/guide/guideRoute',{
    guideId:routeid,
    pageNo:currentPage,
})
//推荐日期接口
export const getGuideRouteDateDetailsUrl = (routeid,priceDate) =>ajax( process.env.VUE_APP_PROXY_API +'/guide/getGuideRouteDateDetails',{
    guideRouteid:routeid,
    priceDate:priceDate
})
//导游确认订单接口
export const saveGuideOrderUrl = (routeid,contactsName,contactsMobile,remark,date,date_a,adult,child,insuranceid,baomang,Selection,guideRouteid) =>ajax( process.env.VUE_APP_PROXY_API +'/guide/saveGuideOrder',{
    guideid:routeid,
    contactsName:contactsName,//联系人
    contactsMobile:contactsMobile,//联系电话
    Remark:remark,//备注
    startDate:date,//开始时间
    endDate:date_a,//结束时间
    adultNum:adult,//大人
    childNum:child,//小孩
    Insurance:insuranceid,//保险id
    InsurancePrice:baomang,//保险价格
    orderMember:Selection,//出游人数组
    guideRouteid:guideRouteid,//推荐导游路线id
},'post')
//当地玩家时间价格
export const getGuideDateDetailsUrl = (routeid,priceDate) =>ajax( process.env.VUE_APP_PROXY_API +'/guide/getGuideDateDetails',{
    guideid:routeid,
    priceDate:priceDate
})
//油轮接口
export const youlun = (date,tagContent,daysty,srtype,minPrice,maxPrice,scenicSpotid,startCity,hangxianty,pageNo,searchContent,portid) => ajax( process.env.VUE_APP_PROXY_API +'/cruise/cruiseScreen', {
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
    searchContent:searchContent,
    portid:portid,//出发港口
},'post');
//获取油轮出发港口
export const getStartCityUrl = () =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/getStartCity',{
})
//获取邮轮公司接口
export const getLinerCompanyUrl = () =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/getLinerCompany',{
})
//油轮详细接口
export const linerLineDetailsUrl = (lineid) =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/linerlineDetails',{
    lineid:lineid
})
//游轮日期价格接口
export const getLinePriceDetailsUrl = (lineid,priceDate)  =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/getLinePriceDetails',{
    lineid:lineid,
    priceDate:priceDate,
})
//邮轮行程列表接口
export const tripLisUrl = (lineid) =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/tripList',{  
    lineid:lineid,
})
//邮轮房间列表接口
export const linerRoomListUrl = (lineid) =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/linerRoomList',{  
    lineid:lineid,
})

//邮轮确认订单接口
export const saveLineOrderUrl = (lineid,contactsName,contactsMobile,remark,date,adult,child,insuranceid,Tanker,Selection) =>ajax( process.env.VUE_APP_PROXY_API +'/cruise/saveLineOrder',{
    linerLineid:lineid,//路线id
    contactsName:contactsName,//联系人
    contactsMobile:contactsMobile,//联系电话
    remark:remark,//备注
    startDate:date,//开始时间
    adultNum:adult,//大人
    childNum:child,//小孩
    Insurance:insuranceid,//保险id
    roomDetails:Tanker,//房间详情
    orderMember:Selection,//出游人数组
},'post')

//景点接口
export const jingdian = (cityid,tagContent,srtype,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/scenic/selectScenicList',{
    cityid:cityid,//城市ID
    orderByType:srtype,//1.销量2.价格降序3.价格升序4好评
    labelAttrid:tagContent,//属性ID
    pageNo: pageNo,
});
//景点详情接口
export const getScenicDetailsUrl = (scenicid) => ajax( process.env.VUE_APP_PROXY_API +'/scenic/getScenicDetails',{
    scenicid:scenicid

});
//景点门票价格接口
export const getScenicNumUrl = (scenicSpotTicketId,priceDate) => ajax( process.env.VUE_APP_PROXY_API +'/scenic/getScenicNum',{
    scenicSpotTicketId:scenicSpotTicketId,
    scenicDate:priceDate,

});
//景点下单接口
export const saveScenicOrderUrl = (scenicSpotTicketId,contactsName,contactsMobile,remark,startDate,adult,child,insuranceid,Selection,scenicid,zonchoiceperson) => ajax( process.env.VUE_APP_PROXY_API +'/scenic/saveScenicOrder',{
    ticketid:scenicSpotTicketId,//门票id
    contactsName:contactsName,//联系人姓名
    contactsMobile:contactsMobile,//电话
    remark:remark,//备注
    startDate:startDate,//出发时间
    adultNum:adult,//大人
    childNum:child,//小孩
    insuranceid:insuranceid,//保险id
    orderMember:Selection,//出游人
    scenicid:scenicid,//景点id
    ticketNum:zonchoiceperson,//门票数量

},'post');
//景点选择城市接口/根据语言获取城市和城市景点数量接口
export const jdchengshi = () => ajax( process.env.VUE_APP_PROXY_API +'/scenic/getCityScenicNum',{

});
//获取邮轮航线接口
export const gankou = () => ajax( process.env.VUE_APP_PROXY_API +'/cruise/getCourse',{
  
});
//根据语言获取出发城市接口
export const chengshi = () => ajax( process.env.VUE_APP_PROXY_API +'/common/getCityList',{

});
//15-1获取车辆业务类型接口
export const selectCarServiceUrl = () => ajax( process.env.VUE_APP_PROXY_API +'/car/selectCarService',{

});
//4-20根据城市及搜索条件获取酒店接口
export const getHotelByCityUrl = (date,cityid,stars,oneNum,twoNum,threeNum,fourNum,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/common/getHotelByCity',{
    date:date,
    cityid:cityid,
    pageNo:pageNo,
    stars:stars,//
    oneNum:oneNum,
    twoNum:twoNum,
    threeNum:threeNum,
    fourNum:fourNum

});
//4-22获取酒店房间接口
export const getHotelRoomUrl = (date,hotelid,page) => ajax( process.env.VUE_APP_PROXY_API +'/common/getHotelRoom',{
    date:date,
    hotelid:hotelid,
    pageNo:page
});
//15-2包车租车车辆列表
export const getCarByRentUrl = (cityid,comfort,seatNum,serviceids,page) => ajax( process.env.VUE_APP_PROXY_API +'/common/getCarByRent',{
    cityid:cityid,
    comfort:comfort,
    seatNum:seatNum,
    serviceids:serviceids,
    pageNo:page
});
//4-24根据搜索条件获取导游列表接口
export const  getGuideByCityUrl =(guideType,startDate,endDate,cityid,guideAge,guideSex,shuxin,minPrice,maxPrice,pageNo) => ajax( process.env.VUE_APP_PROXY_API +'/common/getGuideByCity',{
    guideType:guideType,//导游类型
    startDate:startDate,//开始时间
    endDate:endDate,//结束时间
    cityid:cityid,//城市id
    guideAge:guideAge,//年龄
    guideSex:guideSex,//性别
    minPrice:minPrice,//低价
    maxPrice:maxPrice,//高价
    tagId:shuxin,//制订标签属性
    pageNo: pageNo,
});
//获取途径 景点                                                                            getCitySpot
export const  getScenicByCity = (cityid) => ajax( process.env.VUE_APP_PROXY_API +'/common/getCitySpot',{
    cityid:cityid,//城市ID
});
//获取附近城市
export const  getNearbyCityUrl = (cityid) => ajax( process.env.VUE_APP_PROXY_API +'/common/getNearbyCity',{
    cityid:cityid,//城市ID
});
//获取首页导航栏
export const getComNavigation = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getComNavigation',{
})
//获取热门城市
export const HotCityList = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getHotCity',{
})
//获取语言
export const getLanguage = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getLanguage',{
})
//获取货币
export const getCurrency = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getCurrency',{
})
//获取基本参数
export const getProtocol = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getProtocol',{
})
//获取个人（旅行社）信息/个人质料
export const Material = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/myInfor',{
})
//获得个人消息
export const xiaoxi = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/getCompush',{
    pageNo:pageNo
})
//获得个人评论消息
export const pinglun = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/getComment',{
    pageNo:pageNo
})
//图片上传
export const imgUp = () => imgUpload( process.env.VUE_APP_PROXY_API +'/common/imgUpload',{

})
//修改个人（旅行社）信息
export const xuigai = (memberType,photo,nickName,phone,countryid,cityid,address,birthday,sex) =>ajax( process.env.VUE_APP_PROXY_API +'/member/updateMy',{
    memberType:memberType,
    photo:photo,//头像
    nickName:nickName,//昵称
    phone:phone,//手机号
    countryid:countryid,//国家ID
    cityid:cityid,//城市ID
    address:address,//详细地址
    birthday:birthday,//生日
    sex:sex,//性别
})
//我的收藏——常规路线
export const changui = (collectionType,pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/myCollection',{
    collectionType:collectionType,
    pageNo:pageNo
})
//取消收藏接口
export const quxiao = (collectionids) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteCollection',{
    collectionids:collectionids
})
//我的草稿
export const caogao = (pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/myDraft',{
    pageNo:pageNo
})
//我的草稿
export const shancaogao = (collectionids) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteDraft',{
    ids:collectionids,
})
//获取常用联系人接口
export const lianxir = () =>ajax( process.env.VUE_APP_PROXY_API +'/common/getMemberContacts',{
})
//删除联系人接口
export const shangchulianx = (contactid) =>ajax( process.env.VUE_APP_PROXY_API +'/member/deleteMemberContact',{
    contactid:contactid,
})
//添加/修改常用联系人接口
export const tianjialianx = (chineseName,englishName,certType,certNo,certValidDate,birthday,area,mobile,contactid) =>ajax( process.env.VUE_APP_PROXY_API +'/member/addMemberContact',{
    chineseName:chineseName,//中名字
    englishName:englishName,//英名字
    certType:certType,//证件类型
    certNo:certNo,//证件号
    certValidDate:certValidDate,//证件有效期
    birthday:birthday,//出生日期
    area:area,//手机区域
    mobile:mobile,//手机号码
    contactid:contactid,
})
//关于我们接口
export const guanyusty = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/getArticle',{
})
//根据语言获取国家城市接口
export const Country = () =>ajax( process.env.VUE_APP_PROXY_API +'/member/getCountryCity',{
    
})
//常规路线详情接口
export const getRouteDetailstyp = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getRouteDetails',{
    routeid:routeid,
    
})
//常规路线/参团行程内容接口
export const getRouteContpy = (routeid) =>ajax( process.env.VUE_APP_PROXY_API +'/route/getRouteContent',{  
    routeid:routeid,
})
//评价
export const selectCommentUrl = (pageNo,routeid,proType) =>ajax(process.env.VUE_APP_PROXY_API +'/common/selectComment',{  
    pageNo:pageNo,
    typeid:routeid,
    proType:proType,
})
//点赞接口
export const digCommentUrl = (typeId,digType) =>ajax(process.env.VUE_APP_PROXY_API +'/common/digComment',{  
    typeId:typeId,
    digType:digType,
})
//4-18添加产品评论子评论接口
export const addChildCommentUrl = (commentid,content) =>ajax(process.env.VUE_APP_PROXY_API +'/common/addChildComment',{  
    commentid:commentid,
    content:content,
})
//用户资讯
export const getConsultUrl = (pageNo,routeid,proType) =>ajax( process.env.VUE_APP_PROXY_API +'/common/getConsult',{  
    pageNo:pageNo,
    typeid:routeid,
    proType:proType,
})
//收藏接口//取消收藏
export const saveCollectionUrl =(routeid,collectionType) =>ajax( process.env.VUE_APP_PROXY_API +'/common/saveCollection',{
    typeid:routeid,
    collectionType:collectionType,
})
//添加用户咨询接口
export const saveConsultUrl = (routeid,proType,content,name,mobile) =>ajax (process.env.VUE_APP_PROXY_API + '/common/saveConsult',{
    typeid:routeid,
    proType:proType,
    content:content,
    name:name,
    mobile:mobile
})
//获取我的订单接口
export const myOrderUrl =(status,pageNo) =>ajax( process.env.VUE_APP_PROXY_API +'/member/myOrder',{
    status:status,
    pageNo:pageNo,
})