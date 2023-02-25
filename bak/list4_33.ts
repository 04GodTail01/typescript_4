/*****************
 * 
 * 論理和演算子||
 * 
 */

/**
 * 論理和演算子の例
 */
console.log("list4_33")
let isStudent5 = true;
let isParent = false;
let isTarget5 = (isStudent5 || isParent);   //左辺でtrueならば右辺の評価はされない
console.info(isTarget5);

/**
 * 論理和積演算子は左辺がtrueの場合は右辺は評価されない
 */
console.log("list4_32");
let left2 = () : boolean => {
    console.info("left");
    return true;
}
let rigth2 = () : boolean => {
    console.info("rigth");
    return false;
}
console.info( left2() || rigth2() ) ; //左辺の時点でtrueだから打ち切り
