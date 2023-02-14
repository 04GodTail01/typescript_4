class Cart{
    private totalValue : number;

    get Total(): number {
        return this.totalValue;
    }

    public Execute() : void{
        this.totalValue = 100;
    }
}

let c = new Cart();

c.Execute();
console.info(c.Total);
