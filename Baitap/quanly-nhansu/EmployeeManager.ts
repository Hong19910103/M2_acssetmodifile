import {Employee} from "./Employee";

export class EmployeeManager {
    EmployeeList: Employee[] = []; // khai baoas mảng danh sach nhan su de quan ly thong tin nhan su

    constructor() {
    }

    getShowList() {
        return this.EmployeeList; //Hiển thị danh sách nhân sự

    }

    getAdd(employee) {
        return this.EmployeeList.push(employee); // thêm nhân sự mới
    }

    getShow(employee) { // hiển thị thông tin từng nhân viên
        return ` tên nhân viên là : ${employee.getName()} 
                họ : ${employee.getLastname()} 
                ngày tháng năm sinh: ${employee.getBirthDay()}
                địa chỉ : ${employee.getAddress()}
                công việc: ${employee.getJob()}`
    }

    deleteEmployee(index1) {  // xóa thông tin nhân sự
        this.EmployeeList.forEach((value, index) => {
            if (index == index1) {
                this.EmployeeList.splice(index1, 1);
                return console.log(this.getShowList());
            } else {
                return `khong co du lieu xoa`
            }

        })
    }

    updateEmployee(index1: number, employee: Employee) { // cập nhật sửa lại thông tin nhân sự
        this.EmployeeList.forEach((value, index) => { // lặp qua các phàn tử của mảng tìm giá trị để xóa
            if (index == index1) {
                this.EmployeeList[index1] = employee;
            }
        })
    }

}
