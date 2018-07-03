define(['app/config/app','showdown'], function (app,showdown) {
    app.registerController('fontEndSpecificationCtrl',function ($scope,$http,$state) {// app.registerController属于couch// potata的方法
        /**
         * 请求业务
         */
        var requestObj = $scope.requestObj = {
            init:function(){
                requestObj.markdownInit();
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