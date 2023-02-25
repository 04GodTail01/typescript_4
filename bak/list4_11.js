/**
 * 変数の名前は使用できる範囲(スコープ)が広くなるほど具体的に
 */
var usedSomething = 0;
var notUsedSomthing = 0;
{
    var something = [1, 2, 3];
    for (var i = 0; i < something.length; i++) {
        var s = something[i];
        if (s < 2) {
            usedSomething += s;
        }
        else {
            notUsedSomthing += s;
        }
    }
}
console.log(usedSomething);
console.log(notUsedSomthing);
