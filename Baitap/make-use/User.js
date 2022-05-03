var int;
(function (int) {
    int[int["admin"] = 1] = "admin";
    int[int["user"] = 2] = "user";
})(int || (int = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    User.prototype.setName = function (name) {
        this._name = name;
    };
    User.prototype.setEmail = function (email) {
        this._email = email;
    };
    User.prototype.setRole = function (role) {
        this._role = role;
    };
    User.prototype.getInfo = function () {
        return "nguoi dung la: ".concat(this._name, " \u0111\u1ECBa ch\u1EC9 email: ").concat(this._email, "  l\u00E0  ").concat(this.isAdmin());
    };
    User.prototype.isAdmin = function () {
        if (this._role === 1) {
            return "Admin";
        }
        else {
            return "ng\u01B0\u1EDDi d\u00F9ng b\u00ECnh th\u01B0\u1EDDng";
        }
    };
    return User;
}());
var u1 = new User("hong", "Hong@123", 1);
var u2 = new User("ngọc", "ngoc@gmai", 2);
console.log(u1.getInfo());
// console.log(u1.isAdmin());
console.log(u2.getInfo());
// console.log(u2.isAdmin());
