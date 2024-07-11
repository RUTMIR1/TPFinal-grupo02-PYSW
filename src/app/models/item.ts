export class Item {
    id:string;
    category_id:string;
    currency_id:string;
    description:string; 
    picture_url:string;
    title:string;
    quantity:number;
    unit_price:number;

    constructor(id?:string,category_id?:string,currency_id?:string, description?:string, picture_url?:string ,title?:string, quantity?:number,
        unit_price?:number){
            this.id = id ?? "";
            this.category_id = category_id ?? "";
            this.currency_id = currency_id ?? "";
            this.description = description?? "";
            this.picture_url = picture_url?? "";
            this.title = title?? "";
            this.quantity = quantity?? 0;
            this.unit_price = unit_price?? 0;
        }
}
