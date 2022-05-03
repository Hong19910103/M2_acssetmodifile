"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
var e1 = new Employee_1.Employee("hong1", "nguyen1", "1991/09/21", "hd", "nhan su");
var e2 = new Employee_1.Employee("hong2", "nguyen2", "1991/09/22", "hd", "ke toan");
var e3 = new Employee_1.Employee("hong3", "nguyen3", "1991/09/23", "hd", "hanh chinh");
var e4 = new Employee_1.Employee("hong4", "nguyen4", "1991/09/24", "hd", "san xuat");
var e5 = new Employee_1.Employee("hong5", "nguyen5", "1991/09/25", "hd", "doi ngoai");
var e6 = new Employee_1.Employee("hong6", "nguyen6", "1991/09/26", "hd", "it");
var emList = new EmployeeManager_1.EmployeeManager();
emList.getAdd(e1);
emList.getAdd(e2);
emList.getAdd(e3);
emList.getAdd(e4);
emList.getAdd(e5);
emList.getAdd(e6);
// console.log(emList.getShowList());// hiển thị danh sách nhân sự
// console.log(emList.getShow(e3)); // hiển thi thông tin từng nhân viên
console.log(emList.deleteEmployee(2)); // xóa nhân viên
// console.log(emList.updateEmployee(4, e3));// cập nhật thông tin nhân viên
