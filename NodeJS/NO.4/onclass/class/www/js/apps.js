/**
 * Created by liuyujing on 2017/2/13.
 */

angular.module("app",["ionic","app.getDataServices","app.controller"])

  .config(function ($stateProvider, $urlRouterProvider) {

    //通过state 来定义 每一个状态
    $stateProvider
      //state第一个参数 是状态的名字
      //state第二个参数 是具体的设置
      .state("tab",{
        url:"/tab",
        templateUrl:"templates/tab.html",
        abstract:true
      })
      .state("tab.home",{
        //路径
        url:"/home",
        views:{
          //home是视图的名字
          "home":{
            templateUrl:"templates/home.html",
            controller:"homeController"
          }
        }
      })
      .state("tab.detaile",{
        url:"/home/:id",
        views:{
          "home":{
            templateUrl:"templates/homeDetaile.html",
            controller:"homeDetaileController"
          }}

      })
      .state("tab.circle",{
        url:"/circle",
        views:{
          "circle":{
            templateUrl:"templates/circle.html",
            controller:"circleController"
          }
        }
      })
      .state("tab.message",{
        url:"/message",
        views:{
          "message":{
            templateUrl:"templates/message.html",
            controller:"messageController"
          }
        }
      })
      .state("tab.user",{
        url:"/user",
        views:{
          "user":{
            templateUrl:"templates/user.html",
            controller:"userController"
          }
        }
      })
      .state("tab.posts",{
        url:"/user/posts",
        views:{
          "user":{
            templateUrl:"templates/user-posts.html",
            controller:"userPostsController"
          }
        }
      })
      .state("tab.register",{
        url:"/user/register",
        views:{
          "user":{
            templateUrl:"templates/register.html",
            controller:"registerController"
          }
        }
      })
      .state("tab.login",{
      url:"/user/login",
      views:{
        "user":{
          templateUrl:"templates/login.html",
          controller:"loginController"
        }
      }
    });

    //通过otherwise来定义 所有状态 都不符合的情况
    $urlRouterProvider.otherwise("/tab/home");

  });
