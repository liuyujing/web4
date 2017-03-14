/**
 * Created by liuyujing on 2017/2/24.
 */

//配置文件

//  登录相关配置
//登录 失败次数 决定什么时候  调到忘记密码页面
var FINAL_NUM = 3;

//服务器接口

//主机地址
var HOST = "http://localhost:3003";

//注册
var REGISTER = "/users/register";
//登录
var LOGIN = "/users/login";
//找回密码
var GOT_PASSWORD = "/users/gotPassword";

//获取所有菜谱
// var ALL_COOKPAGE = "/cookPage/getCook";
var ALL_COOKPAGE = "/cookPage/cooks";
//点赞
var TACK_GOOD = "/cookPage/good";
//查询点赞
var SEARCH_GOODS = "/cookPage/searchGoods";
//评论
var COMMENT = "/cookPage/comment";
//关注
var FOLLOW = "/cookPage/follow";

//获得关注用户的所有文章
var FOLLOW_COOKS = "/cookPage/getFollowCookPages";

//获取所有菜谱 区分类型
var ALL_COOKPAGE_FOR_TYPE = "/cookPage/getCooksForType";


