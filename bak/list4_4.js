/**
 * return の直後は改行できない
 * 冗長な改行や;の省略もミスや意図が分かりづらく危険
 * @returns
 */
/*
function GetNumber(){
    return
        Math.abs(-1);
}
*/
function GetNumber() {
    return Math.abs(-1);
}
console.log(GetNumber());
console.log;
GetNumber();
