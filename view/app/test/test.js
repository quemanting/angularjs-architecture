define(['app/config/app','layui'], function (app) {
    app.registerController('testCtrl',function ($scope) {
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.markdownInit();
            },
            markdownInit:function(){
                layui.use('code', function(){ //加载code模块
                    layui.code(); //引用code方法
                });
            },
        };

        requestObj.init();
    })
});