/**
 * list4_35
 * 比較演算子の例
 */
let age = 2;
let childPrice = (age < 6);
let isAdult = (20 <= age);


/**
 * list4_36
 * 算術演算子
 */
let value = 1000 + 10 -20;
let point = value * 0.01;
let splite = value / 11;
let mod = value % 11;
let eight = 2 ** 3;

/**
 * list4_37
 * （）で囲んで計算の優先順位を指定する
 */
let result = (1000 + 10 -20 ) / 11;
console.log(result);


/**
 * list4_38
 * 文字列結合の例
 */
let firstName = "Moe";
let lastName = "Yamada";
let email = firstName + "." + lastName + "@exemplr.com";
let key = firstName +1

/**
 * list4_39
 * 文字列連結の代わりにテンプレート文字列を使用した例
 */
let email_2 = `${firstName}.${lastName}@example.com`;
let key_2 = `${firstName}${1}`
console.log(key_2)

/**
 * list4_40
 * 復号代入演算子の例
 */
let result_2 = 100;
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
let i = 0;
i++;

console.info(++i);
console.info(i);

console.info(i++)
console.info(i);

console.info(--i);
console.info(i);

console.info(i--);
console.info(i);