import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [
    {productId: 1, productName: "Iphone", description: "A smart phone"},
    {productId: 2, productName: "Macbook", description: "A laptop"},
    {productId: 3, productName: "Ipad", description: "A tablet"},
    {productId: 4, productName: "Apple Vision Pro", description: "A headset"},
    {productId: 5, productName: "AirPro", description: "A head phone"},
  ]
}
