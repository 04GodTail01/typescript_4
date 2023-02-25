/**************************
 *
 * 比較演算子
 *
 *************************/
/**
 * 比較演算子の結果を変数に代入する
 */
console.log("list4_26");
var isStudent = true;
var canBuy = (isStudent == true);
var point = 0;
var isZero = (point == 0);
var name4 = "";
var isEmpty = (name4 == "");
console.info(canBuy);
console.info(isZero);
console.info(isEmpty);
/**
 * 比較演算子の結果を変数に代入する
 */
console.log("list4_27");
var canNotBuy = (isStudent != true);
var isNotZero = (point != 0);
var isNotEmpty = (name4 != "");
console.info(canNotBuy);
console.info(isNotZero);
console.info(isNotEmpty);
/**
 * 比較演算子== と===の違いの例
 */
console.log("list4_28");
var point1 = "0";
var likeZero = (point == 0);
console.info(likeZero);
var isZero1 = (point1 === 0);
console.info(isZero1);
