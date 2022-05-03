enum int{
    admin =1,
    user,
}

class User{
    private _name:string;
    private _email: string;
    private _role: int;

    constructor(name: string, email: string, role: int) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    setName(name: string) {
        this._name = name;
    }

    setEmail(email: string) {
        this._email = email;
    }

    setRole(role: int) {
        this._role = role;
    }
    getInfo(){
        return `nguoi dung la: ${this._name} địa chỉ email: ${this._email}  là  ${this.isAdmin()}`
    }
    isAdmin(){
        if(this._role===1){
            return `Admin`;
        } else {
            return `người dùng bình thường`
        }
    }
}

let u1=new User("hong", "Hong@123",1);
let u2= new User("ngọc","ngoc@gmai",2);

console.log(u1.getInfo());
// console.log(u1.isAdmin());
console.log(u2.getInfo());
// console.log(u2.isAdmin());
