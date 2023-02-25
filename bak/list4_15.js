/**
 * 文字列の宣言の例
 */
var userName = "Moe Yamada";
var welcome = '"Welcome Back!"'; //シングルクォートで囲まれたダブルクォートは文字列として扱う
var message = "".concat(userName, " says \n").concat(welcome); // バッククォートで改行が生きて、${}で変数組み込みができる
console.info(userName);
console.info(welcome);
console.info(message);
/**
 * list4_16.
 * エスケープシーケンスを使用する
 */
var welcome2 = "\"Welcome Back!\"";
var message2 = userName + "says \r\n" + welcome2;
console.info("welcome2" + welcome2);
console.info(message2);
/**
 * list4_17
 * \を指定するときは\\と入力する
 */
var yen100 = "\\100-";
console.info(yen100);
/**
 * list4_18
 * 空の文字列は""を指定
 */
var empty = "";
console.info(empty);
