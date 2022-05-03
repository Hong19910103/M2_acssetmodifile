"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = []; // tạo mảng roongc chứa các sản phẩm
    }
    ProductManager.prototype.getAllAdd = function () {
        return this.product;
    };
    ProductManager.prototype.setAdd = function (product) {
        this.product.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
