export class Product {

    private _name:string;
    private _price:number;

    constructor(name: string,
                price: number) {
        this._name = name;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(price: number) {
        this._price = price;
    }
}