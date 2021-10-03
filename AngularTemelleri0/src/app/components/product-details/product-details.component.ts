import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductsDetails();
  }

  //Product detay
  getProductsDetails() {
    this.activatedRoute.params.subscribe((params) => {
      this.productService
        .getProductsById(params['productsId'])
        .subscribe((a) => {
          this.product = a;
        });
    });
  }
}
