/********************************************* */
console.log(
    "  ### list4.1:変数宣言.値の代入 関数やメソッドの実行の後に;(セミコロン) "
)
let total : number ;
total = 100;
let point = Math.round( total * 0.006 );
console.log(point);


/********************************************* */
console.log(
    "  #### list4.2 :{}で囲むとブロック"
)
let value1 = 1;
console.info(value1 );

{
    console.info(value1);
    let value2 = 2;
    console.info(value2);
    {
        console.info(value1);
        console.info(value2);
        let value3 = 3;
        console.info(value3);
    }
    console.info(value1);
    console.info(value2);
    // メモリ確保範囲外のため、valeus3は使えない。C言語と一緒   
}
console.info(value1);
// メモリ確保範囲外のため、valeus2は使えない。
// メモリ確保範囲外のため、valeus3は使えない。

/********************************************* */
console.log(
    "### list4.3 メソッドチェーンの途中で改行(npm linq をインストールして使用する例)"
)
import * as Enumerable from "linq";
let list = [10,11,100,101,1000,1001];
let result = Enumerable.
    from(list).
    where(( item, index) => { return item > 100; }).
    forEach(( item, index ) => {console.info(item);})