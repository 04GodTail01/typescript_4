class Favorites<T>{

    //インターフェースの定義
    private list : Array<T> = new Array<T>();
    
    //要素の取得
    public GetItems() : Array<T>{
        return this.list;
    }

    //要素の追加
    public Add(item : T): void{
        this.list.push(item);
    }
}

//文字列型で追加と取得
let animals = new Favorites<string>();
animals.Add("Dog");
console.info(animals.GetItems()[0]);


//Date型（現在時刻）で追加と取得
let days = new Favorites<Date>();
days.Add(new Date());
console.info(days.GetItems()[0]);

