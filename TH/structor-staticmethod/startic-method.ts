class Instructor {

    _name: string; // khai bao kieu du lieu cua class
    _role: string;


    constructor(name: string,
                role: string = "assistance") { // khoi tao phuong thuc name va role
        this._name = name;
        this._role = role;
    }

    RenderDetails() {
        return `${this._name} -${this._role}`;
    }

    static HelloWold() {// khai bao phuong thuc tinh trong ham khoi tao ket qua khi goi in ra mam hinh log ket qua 'hi there'
        console.log(`hi there`)
    }

    static canTeach(instructor) { // khai bao phuowng tinh cho ham khoi tao
        console.log(instructor._role === 'classroom');
    }
}

let i1 = new Instructor("hong");
let i2 = new Instructor("ngoc", "classroom")
console.log(i1.RenderDetails());
console.log(i2.RenderDetails());
Instructor.HelloWold();
// Instructor.canTeach(i1);
// Instructor.canTeach(i2);
console.log(
    `${i1._name} - can teach :`
);
console.log(
    `${i2._name} - can teach : ${Instructor.canTeach(i2)}`
);

