/*****************
 *
 * 論理否定（NOT）演算子
 *
 *****************/
/**
 * 論理否定演算子!の結果おw編s縫うに代入する
 */
console.log("list4_29");
var isStudent2 = true;
var canNotBuy2 = !isStudent2;
var point3 = 0;
var isNotZero2 = !(point3 == 0);
var name3 = "";
var isNotEmpty2 = !(name3 == "");
console.info(canNotBuy2);
console.info(isNotZero2);
console.info(isNotEmpty2);
/**
 * 自動変換s手評価される例(ビルドエラーにならない)
 */
console.log("list4_30");
var isEmpty2 = !"0";
var isTrue = !0;
console.info(isEmpty2);
console.info(isTrue);
