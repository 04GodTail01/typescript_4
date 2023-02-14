//定義
//オーバーロードで引数の型を決定できるように定義
var getTextReading = /** @class */ (function () {
    function getTextReading() {
    }
    return getTextReading;
}());
if (typeof value == "string") {
    return value;
}
else if (typeof value == "number") {
    return values.toString();
}
else if (typeof value == "object" && value instanceof Date) {
    return values.toLocaleString();
}
else {
    return "others";
}
console.log(getText(100));
console.log(getText(new Date()));
console.log(getText("Hello!"));
