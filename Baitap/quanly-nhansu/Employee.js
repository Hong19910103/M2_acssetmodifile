"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, lastname, birthDay, address, job) {
        this._name = name;
        this._lastname = lastname;
        this._birthDay = birthDay;
        this._address = address;
        this._job = job;
    }
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (name) {
        this._name = name;
    };
    Employee.prototype.getLastname = function () {
        return this._lastname;
    };
    Employee.prototype.setLastname = function (lastname) {
        this._lastname = lastname;
    };
    Employee.prototype.getBirthDay = function () {
        return this._birthDay;
    };
    Employee.prototype.setBirthDay = function (day) {
        this._birthDay = day;
    };
    Employee.prototype.getAddress = function () {
        return this._address;
    };
    Employee.prototype.setAddress = function (address) {
        this._address = address;
    };
    Employee.prototype.getJob = function () {
        return this._job;
    };
    return Employee;
}());
exports.Employee = Employee;
