// var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'dhshipin', 'coolMethod', [arg0]);
// };

// testFunc.prototype.test = function (arg0, success, error) {
//     exec(success, error, 'dhshipin', 'test', [arg0]);
// };

var exec = require('cordova/exec');
var myMathFunc = function(){};  

myMathFunc.prototype.test = function(arg0, success, error) {
    exec(success, error, "MyMath", "Plus", arg0);
};

myMathFunc.prototype.minus = function(arg0, success, error) {
    exec(success, error, "MyMath", "Minus", arg0);
};

var MYMATHFUNC = new myMathFunc();
module.exports = MYMATHFUNC; 

// 【success】 ： 成功回调
// 【error 】 ： 失败回调
// 【MyMath】 ： 服务名（必须和 plugin.xml定义的服务名保持一致）
// 【Plus】 ： Action 动作名。(底层实现根据Action字符串调用不同的方法)
// 【arg0】： 参数，必须是数组。 可以是json的数据：[{“key”:“value”,“key”:“value”}]
// ---------------	也可以是[“value1”,“value2”,“value3”,…]
