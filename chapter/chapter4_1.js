"use strict";
exports.__esModule = true;
/********************************************* */
console.log("  ### list4.1:変数宣言.値の代入 関数やメソッドの実行の後に;(セミコロン) ");
var total;
total = 100;
var point = Math.round(total * 0.006);
console.log(point);
/********************************************* */
console.log("  #### list4.2 :{}で囲むとブロック");
var value1 = 1;
console.info(value1);
{
    console.info(value1);
    var value2 = 2;
    console.info(value2);
    {
        console.info(value1);
        console.info(value2);
        var value3 = 3;
        console.info(value3);
    }
    console.info(value1);
    console.info(value2);
    // メモリ確保範囲外のため、valeus3は使えない。C言語と一緒   
}
console.info(value1);
// メモリ確保範囲外のため、valeus2は使えない。
// メモリ確保範囲外のため、valeus3は使えない。
/********************************************* */
console.log("### list4.3 メソッドチェーンの途中で改行(npm linq をインストールして使用する例)");
var Enumerable = require("linq");
var list = [10, 11, 100, 101, 1000, 1001];
var result = Enumerable.
    from(list).
    where(function (item, index) { return item > 100; }).
    forEach(function (item, index) { console.info(item); });
