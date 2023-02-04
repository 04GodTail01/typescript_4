//定義

//オーバーロードで引数の型を決定できるように定義

class getTextReading<T>{
    function getText( value : number ) : string;
    function getText( value : Date ) : string;
    function getText( value : String ) : string;
    function getText( value : any ) : string;    

    if( typeof value == "string"){
        return value;
    }else if(typeof value == "number"){
        return values.toString();
    }else if( typeof value == "object" && value instanceof Date ){
        return values.toLocaleString();
    }else{
        return "others";
    }
    
}



console.log( getText(100))
console.log( getText(new Date()))
console.log( getText("Hello!"))

