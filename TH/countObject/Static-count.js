var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var name1 = new Application("nguyen thi hong");
console.log(Application.count);
var name2 = new Application("nguyen ");
console.log(Application.count);
