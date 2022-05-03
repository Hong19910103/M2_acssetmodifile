"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.setName = function (name) {
        this._name = name;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setPrice = function (price) {
        this._price = price;
    };
    return Product;
}());
exports.Product = Product;
