import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
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

  // destroy after go back
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
