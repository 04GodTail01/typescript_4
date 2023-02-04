var Favorites = /** @class */ (function () {
    function Favorites() {
        //インターフェースの定義
        this.list = new Array();
    }
    //要素の取得
    Favorites.prototype.GetItems = function () {
        return this.list;
    };
    //要素の追加
    Favorites.prototype.Add = function (item) {
        this.list.push(item);
    };
    return Favorites;
}());
//文字列型で追加と取得
var animals = new Favorites();
animals.Add("Dog");
console.info(animals.GetItems()[0]);
//Date形で追加と取得
var days = new Favorites();
days.Add(new Date());
console.info(days.GetItems()[0]);
