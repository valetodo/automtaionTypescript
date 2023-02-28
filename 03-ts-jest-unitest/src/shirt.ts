import {Item} from "./item";
import {ItemData, ShirtData} from "./models/app.models";

export class Shirt extends Item {

    constructor(itemData: ShirtData) {
        super(itemData);
    }
}
