/**
 * 文字列の宣言の例
 */
let userName : string = "Moe Yamada";
let welcome : string = '"Welcome Back!"';   //シングルクォートで囲まれたダブルクォートは文字列として扱う
let message = `${userName} says 
${welcome}`;                // バッククォートで改行が生きて、${}で変数組み込みができる

console.info(userName);
console.info(welcome);
console.info(message);

/**
 * list4_16.
 * エスケープシーケンスを使用する
 */
let welcome2 = "\"Welcome Back!\"";
let message2 = userName + "says \r\n" + welcome2;
console.info("welcome2" + welcome2);
console.info(message2);

/**
 * list4_17
 * \を指定するときは\\と入力する
 */
let yen100 = "\\100-";
console.info(yen100);

/**
 * list4_18
 * 空の文字列は""を指定
 */
let empty = "";
console.info(empty);
