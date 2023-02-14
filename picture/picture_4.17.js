var value1 = 1;
console.log(value1);
{
    console.info(value1);
    var value2 = 2;
    console.info(value2);
    {
        console.info(value1);
        console.info(value2);
        var value3 = 3;
        console.info(value3);
    }
    console.info(value1);
    console.info(value2);
}
console.info(value1);
