import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent  implements OnInit
{
ngOnInit(): void 
{
  this.products=this.productService.getProducts();
  this.filteredProducts=this.products;
}
pageTitle:string="Product List";

imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;

constructor(private productService:ProductService){
  
}

private _listFilter:string='cart';
get listFilter():string{
return this._listFilter;
}
set listFilter(value:string){
 this._listFilter=value;
 console.log(value);
 this.filteredProducts=this.performFilter(value);
  }

  filteredProducts:IProduct[]=[];


products:IProduct[]=[
  ];

toggleImage():void {
  this.showImage=!this.showImage;
}
onRatingClicked(message:string):void{
  this.pageTitle='Product List :'+message;
}
performFilter(filterby:string):IProduct[]{
  filterby=filterby.toLocaleLowerCase();
  return this.products.filter((prduct:IProduct)=>
  prduct.productName.toLocaleLowerCase().includes(filterby)
  );
}

}
