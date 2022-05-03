import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let e1 = new Employee("hong1","nguyen1","1991/09/21","hd","nhan su")
let e2 = new Employee("hong2","nguyen2","1991/09/22","hd","ke toan")
let e3 = new Employee("hong3","nguyen3","1991/09/23","hd","hanh chinh")
let e4 = new Employee("hong4","nguyen4","1991/09/24","hd","san xuat")
let e5 = new Employee("hong5","nguyen5","1991/09/25","hd","doi ngoai")
let e6 = new Employee("hong6","nguyen6","1991/09/26","hd","it")

let emList = new EmployeeManager();
emList.getAdd(e1);
emList.getAdd(e2);
emList.getAdd(e3);
emList.getAdd(e4);
emList.getAdd(e5);
emList.getAdd(e6);

// console.log(emList.getShowList());// hiển thị danh sách nhân sự
// console.log(emList.getShow(e3)); // hiển thi thông tin từng nhân viên
// console.log(emList.deleteEmployee(2)); // xóa nhân viên
// console.log(emList.updateEmployee(4, e3));// cập nhật thông tin nhân viên

