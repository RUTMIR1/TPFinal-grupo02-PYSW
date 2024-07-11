export class Item {
    title:string;
    description:string;
    picture_url:string;
    category_id:string;
    quantity:number;
    unit_price:number;

    constructor(title?:string, description?:string, picture_url?:string, category_id?:string, quantity?:number,
        unit_price?:number){
            this.title = title ?? "";
            this.description = description ?? "";
            this.picture_url = picture_url ?? "";
            this.category_id = category_id ?? "";
            this.quantity = quantity ?? 0;
            this.unit_price = unit_price ?? 0;
        }
}
