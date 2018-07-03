define(['app/config/app','layer'], function (app) {
    app.registerController('homeCtrl',function ($scope,$http,$state) {// app.registerController属于couch potata的方法
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.layuiInit();
                requestObj.getMenu();
                requestObj.initTableHeihgt();
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
            initTableHeihgt: function() {
                var newheight = $('.home').height() - 60;
                $('.home-content').height(newheight);
            },
            gotoMenu:function(row){
                $state.go("home"+row.menuUrl)
            }
        };

        requestObj.init();
    })
});