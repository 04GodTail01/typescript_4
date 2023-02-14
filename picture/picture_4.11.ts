/**
 * 表の値をさらに表に入れることをイメージ
 * JSON/クラス
 * アプリの設定ファイルとして使いやすい書き方
 */


// プロパティ
class Product{
    Id : number;
    Name : string;
    ISBN10 : string;
    ISBN13 : string;
}

let item1 : Product = {
    Id : 1,
    Name : "チーム開発の教科書",
    ISBN10 : "4822298",
    ISBN13 : "978-222",
};

let item2 : Product = {
    Id : 2,
    Name : "初めてのASP.NET",
    ISBN10 : "4822298",
    ISBN13 : "978-222",
};