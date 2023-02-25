/**
 * list4_46
 * 列挙型の値に文字列の値を設定する例
 */
var Desition;
(function (Desition) {
    Desition["YES"] = "Yes";
    Desition["NO"] = "No";
    Desition["Pending"] = "PENDING";
})(Desition || (Desition = {}));
var d2 = Desition.Pending;
console.info(d2);
console.info(Desition[d2]);
/**
 * list4_47
 * 列挙型enumをフラグとして使用する定義とビット演算の例
 */
var Decition3;
(function (Decition3) {
    Decition3[Decition3["Yes"] = 1] = "Yes";
    Decition3[Decition3["No"] = 2] = "No";
    Decition3[Decition3["Pending"] = 4] = "Pending";
    Decition3[Decition3["YesAndNo"] = 3] = "YesAndNo";
})(Decition3 || (Decition3 = {}));
var d4 = Decition3.YesAndNo;
console.info((d4 & Decition3.Yes) != 0);
console.info((d4 & Decition3.No) != 0);
console.info((d4 & Decition3.Pending) != 0);
d4 = Decition3.Pending;
console.info((d4 & Decition3.Yes) != 0);
console.info((d4 & Decition3.No) != 0);
console.info((d4 & Decition3.Pending) != 0);
