/*************************
 * 
 * 論理積演算子 &&
 * 
 */

/**
 * 論理積演算子の例
 */
console.log("list4_31");
let isStudent3 = true;
let point4 = 0;
let isTarget = (isStudent3 && ( point4 !== 0));
console.info(isTarget);


/**
 * 論理積演算子は左辺がfalseの場合は右辺は評価されない
 */
console.log("list4_32");
let left = () : boolean => {
    console.info("left");
    return false;
}
let rigth = () : boolean => {
    console.info("rigth");
    return true;
}
console.info( left() && rigth() ) ; //左辺の時点でfalseだから打ち切り

