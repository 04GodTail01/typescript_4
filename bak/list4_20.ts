/*****************
 * 
 * 代入演算子
 * 
 ****************/


/**
 * 代入演算子の例
 */
let isStudent = false;
let point = 10;
let name2 = "Moe Yamada";

/**
 * メソッドの事項結果を変数に代入する
 */
let result = Math.round(point / 100);

/**
 * 変数と値のデータ型が異なる場合にはビルドエラー
 */
//let point : number = "A";

/**
 * number 型変数にstring型の値を格納してビルドエラーでも動作する
 */
let point : number = "10";          //文字列型の数値を入れる
console.info(point);
let r = point / 10;
console.info(r);

/**
 * number型の変数にstring型の値を格納して誤った動作をする例
 */
console.log("list4_24");
let point3 : number = "10";
console.info(point3);
let r3 = point3 + 10;   //  最初の変数につられて、文字列結合になってしまう
console.info(r3);



/**
 * string型をnumber型に変換して代入する例
 */
console.log("list4_25");
let point4 : number = Number("10"); //関数Numberで文字列を数値に変換。変換の確認はisNaN()

