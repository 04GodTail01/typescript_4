/**
 * list4_42
 * 列挙型enumの定義と使用する例
 */
enum Decition{
    Yes,
    No,
    Pending
}
let d : Decition = Decition.Pending;
console.info(d == Decition.Pending);

/**
 * list4_43
 * 条件分岐を使って列挙型の値に応じた処理を実行する
 */
let c : Decition = Decition.Yes
if ( d == Decition.Yes)
{
    console.log("YES");
}
else
{
    console.log("Not YES");
}

switch(d){
    case Decition.Yes:
        console.log("YES");
        break;
    case Decition.No:
        console.log("NO");
        break;
    default:
        console.log("OTHERS");
        break;

} 


/**
 * list4_44
 * 列挙型で扱う内容の例
 */
console.log("list4_43");
enum WorkingDays{
    None,
    Monday,
    Tueseday,
    Wednesday,
    Thursday,
    Friday
}
let w = WorkingDays.Friday;
console.info( w == WorkingDays.Friday);
console.info(WorkingDays[w]);

enum ItemState {
    Started ,
    Approved,
    Complete,
    Canceled
}
let s = ItemState.Approved;
console.info(s == ItemState.Approved);
console.log(ItemState[s]);


/**
 * list4_45
 * 列挙型の変数の値の名前を取得する例
 */
console.log("list4_45");
console.info(d);                //メンバの値を取得
console.info(Decition[d]);      //メンバの名称を取得




