/**
 * 定数宣言の例
 */
console.log("list4_48");
const beta = true;
console.info(beta);
let other = beta ;
let isTrue = (beta == true);

const rate = 0.1 ;
console.info(rate );

const domain = "example.com";
console.info(domain);


/** 
 * 定数を変更するコードはビルドエラー
 */
console.log("list4_49");
console.info(beta);
beta = false ;


/**
 * 定数列挙型const enum の宣言と使用の例
 */
console.log("list4_51");
const enum WorkingDays  {
    None ,
    Monday ,
    Tuesday ,
    Wednesday ,
    Thursday,
    Friday
}
let w2 = WorkingDays.Friday;
console.info( w2 == WorkingDays.Friday);

/**
 * 定数列挙型const enum で文字列値を指定した宣言と使用の例
 */
console.log("list4_53");
const enum WorkingDays3 {
    None = "None",
    Monday = "Mon",
    Tuesday = "Tue",
    Wednesday = "Wed",
    Thursday = "Thu",
    Friday = "Fri"    
}
let w3 = WorkingDays3.Friday;
console.info( w3 == WorkingDays3.Friday);

