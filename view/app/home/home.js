define(['app/config/app','mCustomScrollbar'], function (app,mCustomScrollbar) {
    app.registerController('homeCtrl',function ($scope,$http,$state) {// app.registerController属于couch potata的方法
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.layuiInit();
                requestObj.getMenu();
                requestObj.initHomeHeihgt();
            },
            layuiInit:function(){
                layui.use('element', function(){
                    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
                    element.on('nav', function(elem){//监听导航点击
                        // layer.msg(elem.text());
                    });
                });
                layui.use('form', function(){
                    var element = layui.form;
                    element.on('nav', function(elem){

                    });
                });
            },
            menu:[],
            selectList:[],
            primaryMenu:0,
            getMenu:function () {
                $http.get('app/home/menu.json').success(function (data) {
                    requestObj.menu = data;
                    requestObj.selectList = [];
                    angular.forEach(data,function(list){
                        angular.forEach(list.subMenus,function(row){
                            angular.forEach(row.subMenus,function(sub){
                                requestObj.selectList.push(sub)
                            })
                        })
                    })
                });
            },
            initHomeHeihgt: function() {
                var newheight = $('body').height() - 60;
                $('.home-body').height(newheight);
            },
            gotoMenu:function(row){
                $state.go("home"+row.menuUrl)
            }
        };

        requestObj.init();
        $(window).resize(function() {
            requestObj.initHomeHeihgt();
        });
        (function($){
            $(window).on("load",function(){
                $(".home-content").mCustomScrollbar();
            });
        })(jQuery);
    })
});