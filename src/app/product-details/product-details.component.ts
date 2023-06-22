import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;
  id: any;
  sub: any;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {}

  onBack(): void {
    this._router.navigate(['product']);
  }

  ngOnInit() {
    this.sub = this._Activatedroute.params.subscribe(params => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productId == this.id);
    });
  }
}
