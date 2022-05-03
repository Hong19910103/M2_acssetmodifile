var Instructor = /** @class */ (function () {
    function Instructor(name, role) {
        if (role === void 0) { role = "assistance"; }
        this._name = name;
        this._role = role;
    }
    Instructor.prototype.RenderDetails = function () {
        return "".concat(this._name, " -").concat(this._role);
    };
    Instructor.HelloWold = function () {
        console.log("hi there");
    };
    Instructor.canTeach = function (instructor) {
        console.log(instructor._role === 'classroom');
    };
    return Instructor;
}());
var i1 = new Instructor("hong");
var i2 = new Instructor("ngoc", "classroom");
console.log(i1.RenderDetails());
console.log(i2.RenderDetails());
Instructor.HelloWold();
// Instructor.canTeach(i1);
// Instructor.canTeach(i2);
console.log("".concat(i1._name, " - can teach :"));
console.log("".concat(i2._name, " - can teach : ").concat(Instructor.canTeach(i2)));
