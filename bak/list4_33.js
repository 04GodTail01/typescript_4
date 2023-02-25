/*****************
 *
 * 論理和演算子||
 *
 */
/**
 * 論理和演算子の例
 */
console.log("list4_33");
var isStudent5 = true;
var isParent = false;
var isTarget5 = (isStudent5 || isParent); //左辺でtrueならば右辺の評価はされない
console.info(isTarget5);
/**
 * 論理和積演算子は左辺がtrueの場合は右辺は評価されない
 */
console.log("list4_32");
var left2 = function () {
    console.info("left");
    return true;
};
var rigth2 = function () {
    console.info("rigth");
    return false;
};
console.info(left2() || rigth2()); //左辺の時点でfalseだから打ち切り
