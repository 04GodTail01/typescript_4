/**
 * 定数宣言の例
 */
console.log("list4_48");
var beta = true;
console.info(beta);
var other = beta;
var isTrue = (beta == true);
var rate = 0.1;
console.info(rate);
var domain = "example.com";
console.info(domain);
/**
 * 定数を変更するコードはビルドエラー
 */
console.log("list4_49");
console.info(beta);
beta = false;
/**
 * 定数列挙型const enum の宣言と使用の例
 */
console.log("list4_51");
var w2 = 5 /* WorkingDays.Friday */;
console.info(w2 == 5 /* WorkingDays.Friday */);
/**
 * 定数列挙型const enum で文字列値を指定した宣言と使用の例
 */
console.log("list4_53");
var w3 = "Fri" /* WorkingDays3.Friday */;
console.info(w3 == "Fri" /* WorkingDays3.Friday */);
