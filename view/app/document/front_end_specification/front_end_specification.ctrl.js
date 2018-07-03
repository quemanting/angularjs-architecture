define(['app/config/app','showdown','mCustomScrollbar'], function (app,showdown) {
    app.registerController('fontEndSpecificationCtrl',function ($scope,$http,$state) {
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.markdownInit();
                // requestObj.mCustomScrollbarInit();
            },
            mCustomScrollbarInit:function(){
                angular.element.mCustomScrollbar({
                    mouseWheelPixels:300,
                    scrollInertia:0,
                    autoHideScrollbar:true,
                    mouseWheel:{ enable: true }
                });
            },
            markdownInit:function(){
                /*layui.use('code', function(){ //加载code模块
                    layui.code(); //引用code方法
                });*/
                $http.get('app/document/markdown/one.md').success(function (data) {
                    var converter = new showdown.Converter();
                    document.getElementById("result").innerHTML = converter.makeHtml(data);
                });

            },
        };

        requestObj.init();
    })
});