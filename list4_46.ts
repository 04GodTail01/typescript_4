/**
 * list4_46
 * 列挙型の値に文字列の値を設定する例
 */
enum Desition {
    YES = "Yes",
    NO = "No",
    Pending = "PENDING"
}
let d2 : Desition = Desition.Pending;
console.info(d2);
console.info(Desition[d2]);

/**
 * list4_47
 * 列挙型enumをフラグとして使用する定義とビット演算の例
 */
enum Decition3 { 
    Yes = 0x1,
    No = 0x2,
    Pending = 0x4,
    YesAndNo = Yes | No
}
let d4 : Decition3 = Decition3.YesAndNo;
console.info(( d4 & Decition3.Yes) != 0);       //該当する
console.info(( d4 & Decition3.No) != 0);        //該当する
console.info(( d4 & Decition3.Pending) != 0);   //該当しない

d4 = Decition3.Pending;
console.info(( d4 & Decition3.Yes) != 0);       //該当しない
console.info(( d4 & Decition3.No) != 0);        //該当しない
console.info(( d4 & Decition3.Pending) != 0);   //該当する
