var Cart = /** @class */ (function () {
    function Cart() {
    }
    Object.defineProperty(Cart.prototype, "Total", {
        get: function () {
            return this.totalValue;
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.Execute = function () {
        this.totalValue = 100;
    };
    return Cart;
}());
var c = new Cart();
c.Execute();
console.info(c.Total);
