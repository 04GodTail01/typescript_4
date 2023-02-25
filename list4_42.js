/**
 * list4_42
 * 列挙型enumの定義と使用する例
 */
var Decition;
(function (Decition) {
    Decition[Decition["Yes"] = 0] = "Yes";
    Decition[Decition["No"] = 1] = "No";
    Decition[Decition["Pending"] = 2] = "Pending";
})(Decition || (Decition = {}));
var d = Decition.Pending;
console.info(d == Decition.Pending);
/**
 * list4_43
 * 条件分岐を使って列挙型の値に応じた処理を実行する
 */
var c = Decition.Yes;
if (d == Decition.Yes) {
    console.log("YES");
}
else {
    console.log("Not YES");
}
switch (d) {
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
var WorkingDays;
(function (WorkingDays) {
    WorkingDays[WorkingDays["None"] = 0] = "None";
    WorkingDays[WorkingDays["Monday"] = 1] = "Monday";
    WorkingDays[WorkingDays["Tueseday"] = 2] = "Tueseday";
    WorkingDays[WorkingDays["Wednesday"] = 3] = "Wednesday";
    WorkingDays[WorkingDays["Thursday"] = 4] = "Thursday";
    WorkingDays[WorkingDays["Friday"] = 5] = "Friday";
})(WorkingDays || (WorkingDays = {}));
var w = WorkingDays.Friday;
console.info(w == WorkingDays.Friday);
console.info(WorkingDays[w]);
var ItemState;
(function (ItemState) {
    ItemState[ItemState["Started"] = 0] = "Started";
    ItemState[ItemState["Approved"] = 1] = "Approved";
    ItemState[ItemState["Complete"] = 2] = "Complete";
    ItemState[ItemState["Canceled"] = 3] = "Canceled";
})(ItemState || (ItemState = {}));
var s = ItemState.Approved;
console.info(s == ItemState.Approved);
console.log(ItemState[s]);
/**
 * list4_45
 * 列挙型の変数の値の名前を取得する例
 */
console.log("list4_45");
console.info(d); //メンバの値を取得
console.info(Decition[d]); //メンバの名称を取得
