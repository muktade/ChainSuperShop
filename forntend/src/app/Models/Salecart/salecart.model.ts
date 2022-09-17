import { Injectable } from "@angular/core";
import { Product } from '../product/Product.model';

@Injectable()

export class Cart {

    public lines: CartLine[] = [];
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1, unitprice = 0) {

        let line = this.lines.find(line => line.product.pid == product.pid);

        if (line != undefined) {
            line.quantity += quantity;
            line.unitprice += unitprice;
        } else {
            this.lines.push(new CartLine(product, quantity, unitprice));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.pid == product.pid);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    updatePrice(product: Product, unitprice: number) {
        let line = this.lines.find(line => line.product.pid == product.pid);
        if (line != undefined) {
            line.unitprice = Number(unitprice);
        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.pid == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.cartPrice = 0;
    }
    private recalculate() {
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.cartPrice += (l.quantity * l.unitprice);
        })
    } 
}

export class CartLine {

    constructor(public product: Product,
        public quantity: number, public unitprice: number) { }

    get lineTotal() {
        return this.quantity * this.unitprice;
    }
}