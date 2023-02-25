/**
 * 特殊な値 NaNやinfinityが格納される
 */
let notNumber : any = "Hello!";
let nan = notNumber * 10;           // any型の変数に文字列を入れて計算させるとNaN(非数値)になる
console.info(nan);                  //NaN == 非数値
console.info(isNaN(nan));

let plus = 1/0;
console.info(plus);
console.info(plus == Infinity);     //boolean　Infinity == 無限数

let minus = -1 / 0;
console.info(minus);
console.info(minus == -Infinity);   //boolean
