"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.EmployeeList = []; // khai baoas mảng danh sach nhan su de quan ly thong tin nhan su
    }
    EmployeeManager.prototype.getShowList = function () {
        return this.EmployeeList; //Hiển thị danh sách nhân sự
    };
    EmployeeManager.prototype.getAdd = function (employee) {
        return this.EmployeeList.push(employee); // thêm nhân sự mới
    };
    EmployeeManager.prototype.getShow = function (employee) {
        return " t\u00EAn nh\u00E2n vi\u00EAn l\u00E0 : ".concat(employee.getName(), " \n                h\u1ECD : ").concat(employee.getLastname(), " \n                ng\u00E0y th\u00E1ng n\u0103m sinh: ").concat(employee.getBirthDay(), "\n                \u0111\u1ECBa ch\u1EC9 : ").concat(employee.getAddress(), "\n                c\u00F4ng vi\u1EC7c: ").concat(employee.getJob());
    };
    EmployeeManager.prototype.deleteEmployee = function (index1) {
        var _this = this;
        this.EmployeeList.forEach(function (value, index) {
            if (index == index1) {
                _this.EmployeeList.splice(index1, 1);
                return console.log(_this.getShowList());
            }
        });
    };
    EmployeeManager.prototype.updateEmployee = function (index1, employee) {
        var _this = this;
        this.EmployeeList.forEach(function (value, index) {
            if (index == index1) {
                _this.EmployeeList[index1] = employee;
            }
        });
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
