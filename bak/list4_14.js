/**
 * 特殊な値 NaNやinfinityが格納される
 */
var notNumber = "Hello!";
var nan = notNumber * 10;
console.info(nan);
console.info(isNaN(nan));
var plus = 1 / 0;
console.info(plus);
console.info(plus == Infinity);
var minus = -1 / 0;
console.info(minus);
console.info(minus == -Infinity);
