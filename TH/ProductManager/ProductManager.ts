export class ProductManager {
     private product = []; // tạo mảng roongc chứa các sản phẩm
    constructor() {
    }

    getAllAdd() { // taok hàm trả về giá trị của tất cả các mảng
        return this.product;
    }

    setAdd(product) { // tạo hàm  push các giá trị mới vào mảng
        this.product.push(product)
    }
}