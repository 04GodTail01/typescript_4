import * as Enumerable from "linq";
//import * as Enumerable from "linq-es5";
//import * as Enumerable from "linq-es2015";

let list = [10,11,100,101,1000,1001];
let result  = Enumerable.
                from(list).
                Where( (item, index)=>{ return item > 100; }).
                forEach( (item , index) =>{ console.info(item); } );
