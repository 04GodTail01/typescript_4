/**
 * 変数の名前は使用できる範囲(スコープ)が広くなるほど具体的に
 */
let usedSomething : number = 0;
let notUsedSomthing : number = 0;
{
    let something : Array<number> = [1,2,3];
    for (var i = 0; i < something.length; i++){
        let s = something[i];
        if ( s<2 ){
            usedSomething += s;
        }else{
            notUsedSomthing += s;
        }
    }
}
console.log(usedSomething);
console.log(notUsedSomthing);
