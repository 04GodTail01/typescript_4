/**************************
 * 
 * 比較演算子
 * 
 *************************/

/**
 * 比較演算子の結果を変数に代入する
 */
console.log("list4_26");
let isStudent = true;
let canBuy = (isStudent == true);
let point = 0;
let isZero = (point == 0) ;
let name4 : string = "";
let isEmpty = (name4 == "");
console.info(canBuy);
console.info(isZero);
console.info(isEmpty);

/**
 * 比較演算子の結果を変数に代入する
 */
console.log("list4_27");
let canNotBuy = (isStudent != true);
let isNotZero = (point != 0);
let isNotEmpty = (name4 != "");
console.info(canNotBuy);
console.info(isNotZero);
console.info(isNotEmpty);



/**
 * 比較演算子== と===の違いの例
 */
console.log("list4_28");
let point1 : number = "0";
let likeZero = (point == 0);
console.info(likeZero);
let isZero1 = (point1 === 0);
console.info(isZero1)