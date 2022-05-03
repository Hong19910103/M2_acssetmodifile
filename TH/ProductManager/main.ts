import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let p1 = new Product("iphone",1000);
let p2  = new Product("samsung",1250);
let p3 = new Product("opple",500);
let productManager = new ProductManager()
productManager.setAdd(p1);
productManager.setAdd(p2);
productManager.setAdd(p3);
console.log(productManager.getAllAdd());