import { Cart } from './cart';
import { Injectable } from '@angular/core';

@Injectable()
export class Order {
    id: number;
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;

    isSent: boolean = false;

    constructor(public cart: Cart) {

    }

    clearOrder() {
        this.id = null;
        this.name = this.address = this.city = this.phone = this.email = null;
        this.isSent = false;

        this.cart.clear();
    }
}