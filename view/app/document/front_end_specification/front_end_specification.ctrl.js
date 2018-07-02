define(['app/config/app','layer'], function (app) {
    app.registerController('fontEndSpecificationCtrl',function ($scope,$http,$state) {// app.registerController属于couch
        // potata的方法
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.layuiInit();
            },
            layuiInit:function(){
                layui.use('code', function(){ //加载code模块
                    layui.code(); //引用code方法
                });
            },
        };

    })
});