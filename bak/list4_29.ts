/*****************
 * 
 * 論理否定（NOT）演算子
 * 
 *****************/

/**
 * 論理否定演算子!の結果おw編s縫うに代入する
 */
console.log("list4_29");
let isStudent2 = true;
let canNotBuy2 = ! isStudent2;
let point3 = 0;
let isNotZero2 = !(point3 == 0);
let name3 : string = "";
let isNotEmpty2 = !(name3 == "");
console.info(canNotBuy2);
console.info(isNotZero2);
console.info(isNotEmpty2);

/**
 * 自動変換s手評価される例(ビルドエラーにならない)
 */
console.log("list4_30");
let isEmpty2  = ! "0";
let isTrue = ! 0;
console.info(isEmpty2);
console.info(isTrue);
