/**
 * list4_35
 * 比較演算子の例
 */
var age = 2;
var childPrice = (age < 6);
var isAdult = (20 <= age);
/**
 * list4_36
 * 算術演算子
 */
var value = 1000 + 10 - 20;
var point = value * 0.01;
var splite = value / 11;
var mod = value % 11;
var eight = Math.pow(2, 3);
/**
 * list4_37
 * （）で囲んで計算の優先順位を指定する
 */
var result = (1000 + 10 - 20) / 11;
console.log(result);
/**
 * list4_38
 * 文字列結合の例
 */
var firstName = "Moe";
var lastName = "Yamada";
var email = firstName + "." + lastName + "@exemplr.com";
var key = firstName + 1;
/**
 * list4_39
 * 文字列連結の代わりにテンプレート文字列を使用した例
 */
var email_2 = "".concat(firstName, ".").concat(lastName, "@example.com");
var key_2 = "".concat(firstName).concat(1);
console.log(key_2);
/**
 * list4_40
 * 復号代入演算子の例
 */
var result_2 = 100;
result_2 += 10;
console.log(result_2);
result_2 -= 20;
console.log(result_2);
result_2 *= 0.001;
console.log(result_2);
/**
 * list4_41
 * インクリメント演算子とデクリメント演算子
 */
console.log("list4_41");
var i = 0;
i++;
console.info(++i);
console.info(i);
console.info(i++);
console.info(i);
console.info(--i);
console.info(i);
console.info(i--);
console.info(i);
