import {Item} from "./item";
import {ItemData, MobileData, ShirtData} from "./models/app.models";
import {Shirt} from "./shirt";
import {SmartPhone} from "./smartphone";

export class StoreItems {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addProduct(dataItem: Item) {
        this.items.push(dataItem);
    }

    getProduct(productName: string) {
        for (const product of this.items) {
            if (product.item.productName === productName) {
                return product
            }
        }
    }

    deleteProduct(productName: string) {
        for (const index in this.items) {
            if (this.items[index].item.productName === productName) {
                const i = index as unknown as number;
                this.items.splice(i, 1);
            }
        }
    }

    getProducts() {
        return this.items;
    }
}

