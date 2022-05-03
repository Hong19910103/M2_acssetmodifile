class Application { // số lượng đối tượng được sinh ra
    private name: string;
    static count: number = 0; // thuộc tính count của class đc sử dụng trực tiếp khi sử dụng static

    constructor(name: string) {
        this.name = name;
        Application.count++; // truy xuất vào biến count và tăng lên 1
    }
}

console.log(Application.count);
let name1 = new Application("nguyen thi hong");
console.log(Application.count);
let name2 = new Application("nguyen ");
console.log(Application.count);
// mỗi lần khởi tạo 1 đối tượng mới biến count sẽ tăng lên 1 => đếm số lượng object đã được khởi tạo