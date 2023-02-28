import { Item } from "./item";
import { MobileData } from "./models/app.models";

export class SmartPhone extends Item {

  constructor(itemData:MobileData){
    super(itemData);
  }
}
