// <!-- Name: {{p.Name}}<br>
// stockLeft    {{p.stock}}<br>
// ProductType {{p.TypeId}}<br>
// Price {{p.UnitPrice}}<br>
// ProductId    {{p.id}}<br>
//  imageURl    {{p.images1}}<br>
//  Proddesc {{p.proddesc}} -->

export class Product{
    id: number;
    Typeid:number;
    Name: string;
    Stock:number;
    UnitPrice: number;
    images: string;
    proddesc: string;
}