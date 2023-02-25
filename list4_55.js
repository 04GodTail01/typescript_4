/**
 * 条件分岐if else if elseの例
 */
console.log("list4_55");
var month = new Date().getMonth() + 1;
var birthMonth = 12;
var message = "";
if (month == birthMonth) {
    message = "happy birth day!";
}
else if (month == 1) {
    message = "happy new Year!";
}
else {
    message = "Welcome back!";
}
console.info(message);
/**
 * elseとelse if は省略可能
 * else if は服す指定可能
 */
console.log("list4_56");
message = "Welcome back!!";
if (month == birthMonth) {
    message = "happy birth day!";
}
else if (month == 1) {
    message = "happy new Year!";
}
else if (month == 10) {
    message = "Trick or Treate!";
}
console.info(message);
/**
 * 条件演算子（三項演算子）?:の例
 */
console.log("list4_57");
message = (month == birthMonth ? "happy birth day!" : "WelcomeBack!");
console.info(message);
/**
 * 条件演算子の状態や値を複雑な式にするのは避けた方がいい
 */
console.log("list4_58");
var getBirthMonth = function () { return 12; };
console.info(new Date().getMonth() + 1 == getBirthMonth() ?
    "happy birth day!" : "WelcomeBack!");
/**
 * 指定された値がnullや空の文字列などの場合に使用する値を変更する
 */
console.log("list4_59");
var getMessage = function (name) {
    return "Hello \" ".concat(name ? name : "None name");
};
console.info(getMessage(""));
console.info(getMessage(null));
console.info(getMessage("Moe Yamada"));
/**
 * 条件分岐swichの例
 */
console.log("list4_60");
var month = new Date().getMonth() + 1;
birthMonth = 12;
message = "";
switch (month) {
    case birthMonth:
        message = "Happy BirthDay !!";
        break;
    case 1:
        message = "Happy New Year !!";
        break;
    case 10:
        message = "Trick or Treat !!";
        break;
    default:
        message = "Welcome back !!";
        break;
}
console.info(message);
/**
 * 誤ったswitchの例　常にメッセージがWelcome Backになる
 */
console.log("list4_61");
month = new Date().getMonth() + 1;
birthMonth = 12;
message = "";
switch (month) {
    case birthMonth: message = "Happy BirthDay !!";
    case 1: message = "Happy New Year !!";
    case 10: message = "Trick or Treat !!";
    default: message = "Welcome back !!";
}
console.log(message);
/**
 * 複数のケースのラベルで同じ処理を実行する
 */
console.log("list4_62");
switch (month) {
    case birthMonth:
        message = "Happy BirthDay !!";
        break;
    case 1:
        message = "Happy New Year !!";
        break;
    case 4:
    case 5:
    case 6:
        message = "happy Spring!";
        break;
    case 10:
        message = "Trick or Treat !!";
        break;
    default:
        message = "Welcome back !!";
        break;
}
console.info(message);
/**
 * 列挙型enumの値によって処理を分岐するswitchの例
 */
console.log("list4_63");
var ItemState;
(function (ItemState) {
    ItemState[ItemState["Started"] = 0] = "Started";
    ItemState[ItemState["Approved"] = 1] = "Approved";
    ItemState[ItemState["Complete"] = 2] = "Complete";
    ItemState[ItemState["Cancelled"] = 3] = "Cancelled";
})(ItemState || (ItemState = {}));
var getSubmitButonEnabled = function (s) {
    switch (s) {
        case ItemState.Started:
        case ItemState.Approved:
            return true;
        default:
            return false;
    }
};
var enabled = getSubmitButonEnabled(ItemState.Approved);
console.info(enabled);
