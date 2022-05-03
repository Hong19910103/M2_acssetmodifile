export class Employee {

    _name: string;
    _lastname: string;
    _birthDay: string;
    _address: string;
    _job: string;

    constructor(name: string,
                lastname: string,
                birthDay: string,
                address: string
        , job: string) {
        this._name = name;
        this._lastname = lastname;
        this._birthDay = birthDay;
        this._address = address;
        this._job = job;

    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getLastname(): string {
        return this._lastname;
    }

    setLastname(lastname: string) {
        this._lastname = lastname;
    }

    getBirthDay(): string {
        return this._birthDay;
    }

    setBirthDay(day: string) {
        this._birthDay = day;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(address: string) {
        this._address = address;
    }
    getJob(){
        return this._job;
    }

}