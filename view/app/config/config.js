require.config({
    baseUrl: "", //如未显式设置baseUrl，则默认值是加载require.js的HTML所处的位置。如果用了data-main属性，则该路径就变成baseUrl。
    /* urlArgs:"v=" + (new Date()).getTime(), */
    urlArgs: "v=2.0.20180610",
    paths: {
        "angular": "lib/angular/angular",
        "angular-bindonce": "lib/angular/bindonce",
        "angular-animate": "lib/angular/angular-animate",
        "angular-couch-potato": "lib/angular/angular-couch-potato",
        "angular-shiro": "lib/angular/angular-shiro",
        "angular-ui-router": "lib/angular/angular-ui-router/release/angular-ui-router",
        "angular-file-upload": "lib/angular-file-upload-master/dist/angular-file-upload.min",
        "console-sham": "lib/angular-file-upload-master/dist/console-sham.min",
        "es5-sham": "lib/angular-file-upload-master/dist/es5-sham.min",
        "es5-shim": "lib/angular-file-upload-master/dist/es5-shim.min",
        "select2": "lib/angular-ui-select2/select2",
        "ng-select2": "lib/angular-ui-select2/ng-select2",
        "angular-sanitize": "lib/angular-sanitize-master/angular-sanitize.min",
        "angular-table": "lib/angular-table-master/dist/angular-table.min",

        'angular-cookies': "lib/angular/angular-cookies.min",
        'bootstrap':"lib/bootstrap/js/bootstrap.min",
        "jquery": "lib/jquery/jquery-1.10.2.min",
        "jquery-1.8.3": "lib/jquery/jquery-1.8.3",
        "jquery-ui": "lib/jquery-ui/jquery-ui",
        "lodash": "lib/lodash/dist/lodash",
        "restangular": "lib/restangular/dist/restangular",
        "angular-ui-bootstrap-tpls": "lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.12.0",
        "angular-ui-tree": "lib/angular-ui-tree-master/dist/angular-ui-tree-forie8",
        "alertify": "lib/ui-custom/alertify/alertify.min",
        "ztree": "lib/zTree_v3-master/js/jquery.ztree.all.min",
        // "layui": "lib/layui-v1.0.9_rls/layui/layui",
        "layui": "lib/layui-v2.3.0/layui",
        "layer": "lib/layer-v3.0.3/layer/layer",
        "WdatePicker": "lib/My97DatePicker/WdatePicker",
        'easyui': 'lib/jquery-easyui-1.5.1/jquery.easyui.min',
        'artDialog': 'lib/artDialog/js/dialog-plus-min',
        'jquery-print': 'lib/jquery-print/jquery.jqprint-0.3',
        'jquery-from': 'lib/jquery-from/jquery.form.min',
        'jquery-lazyload': 'lib/jquery-lazyload-1.9.3/jquery.lazyload.min',
        'md5': 'lib/js-md5/src/md5',
        'fancybox': 'lib/fancybox/source/jquery.fancybox.ext',
        'fancybox-buttons': 'lib/fancybox/source/helpers/jquery.fancybox-buttons',
        'mousewheel': 'lib/fancybox/lib/jquery.mousewheel-3.0.6.pack',
        'dragsort': 'lib/dragsort-0.5.2/jquery.dragsort-0.5.2.min',
        'ddpowerzoomer': 'lib/ddpowerzoomer/ddpowerzoomer',
        'echarts': 'lib/echarts-3.8.4/echarts',
        'ckplayer': 'lib/ckplayer/ckplayer',
        'simple-echart': 'lib/simple-echart/echarts',
        'map-load': 'lib/offlinemap/map_load',
        'map': 'lib/offlinemap/map',
        'InfoBox': 'lib/offlinemap/tiles_self/InfoBox',
        'map-plus': 'lib/offlinemap/map_plus',
        'map-city': 'lib/offlinemap/map_city',
        'webuploader': 'lib/webuploader/webuploader.min',
        'swfobject': 'lib/swfobject/swfobject'
    },
    shim: { // "垫" 加载非AMD规范的js 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。shim配置仅设置了代码的依赖关系
        "angular": {
            deps: ['jquery'], //这里是业务上需要jquery所以这样写，不是说angular需要依赖jquery
            exports: "angular"
        },
        "jquery-from": { //插件形式的非AMD模块，我们经常会用到jquery插件，而且这些插件基本都不符合AMD规范，这时候就需要将form插件"垫"到jquery中
            deps: ['jquery'], //jquery-from 依赖于jquery ,先加载jquery
            exports: "jquery-from" // //一旦加载，使用全局变量'jquery-from'作为模块值
        },
        "jquery-lazyload": {
            deps: ['jquery'],
            exports: "jquery-lazyload"
        },
        "angular-ui-router": [ //那些仅作为angular的插件存在而不导出任何模块变量的"模块"们，shim配置可简单设置为依赖数组
            "angular"
        ],
        "angular-cookies": [
            "angular"
        ],
        "angular-ui-bootstrap-tpls": [
            "angular"
        ],
        "angular-couch-potato": [
            "angular"
        ],
        "restangular": [
            "angular",
            "lodash"
        ],
        "jquery-ui": [
            "jquery"
        ],
        'fancybox': [
            "mousewheel"
        ],
        'fancybox-buttons': [
            'fancybox'
        ],
        'dragsort': ["jquery"],
        "ztree": ["jquery"],
        "layer": ["jquery"],
        "angular-ui-tree": ["angular", "console-sham", "es5-shim", "es5-sham"],
        "angular-file-upload": ["angular", "console-sham", "es5-sham", "es5-shim"],
        "ng-select2": ["angular", "jquery", "select2"],
        "angular-sanitize": ["angular"],
        "artDialog": ["jquery"],
        "jquery-print": ["jquery"],
        "easyui": ["jquery"],
        'WdatePicker': {
            deps: ["jquery"],
            exports: "WdatePicker"
        },
        'validform': ["jquery"],
        'webuploader': ["jquery"],
        'map': {
            deps: ["jquery", "map-load", "map-plus", "map-city"],
            exports: 'map'
        },
        'InfoBox': ['map']
    },
    packages: [{ //从包中加载模块  name：包名（用于模块名/前缀映射）location： 磁盘上的位置。位置是相对于配置中的baseUrl值，除非它们包含协议或以“/”开头 main:当以“包名”发起require调用后，所应用的一个包内的模块。默认为“main”，除非在此处做了另外设定。该值是相对于包目录的。
        name: 'app',
        location: 'app'
    }, {
        name: 'common',
        location: 'common'
    }, {
        name: 'models',
        location: 'common/models'
    }, {
        name: 'services',
        location: 'common/services'
    }, {
        name: 'filters',
        location: 'common/filters'
    }, {
        name: 'directives',
        location: 'common/directives'
    }, {
        name: 'lib',
        location: 'lib'
    }]
});
