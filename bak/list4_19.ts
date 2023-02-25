/********************
 * 
 * nullとundifined
 * 
 ********************/

/**
 * nullとundifinedと値が格納されている状態
 * （ビルドエラー）
 */
let u : Date;
console.info(u);    //割り当て前に使用するのでエラー

let n : Date = null;          // Date型にnullを割り当てられないのでエラー
console.info(n);

let d = new Date();
console.info(d);
