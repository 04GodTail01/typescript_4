/*************************
 *
 * 論理積演算子 &&
 *
 */
/**
 * 論理積演算子の例
 */
console.log("list4_31");
var isStudent3 = true;
var point4 = 0;
var isTarget = (isStudent3 && (point4 !== 0));
console.info(isTarget);
/**
 * 論理積演算子は左辺がfalseの場合は右辺は評価されない
 */
console.log("list4_32");
var left = function () {
    console.info("left");
    return false;
};
var rigth = function () {
    console.info("rigth");
    return true;
};
console.info(left() && rigth());
