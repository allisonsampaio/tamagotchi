var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.says = function () {
        return "meow";
    };
    return Cat;
}());
var cat = new Cat();
console.log(cat.says());
