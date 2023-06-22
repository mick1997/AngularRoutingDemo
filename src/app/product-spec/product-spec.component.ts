import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css'],
})
export class ProductSpecComponent implements OnInit {
  product: any;
  id: any;
  sub: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.parent?.params.subscribe((params) => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find((p) => p.productId == this.id);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
