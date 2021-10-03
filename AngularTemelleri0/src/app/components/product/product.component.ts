import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public products: Product[] = [];
  spinnersData = false;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //Category'e göre products getirme,yani category'e tıklandığında
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getPproductsByCategoryId(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  //Products
  getProducts() {
    this.productService.getProducts().subscribe((a) => {
      this.products = a;
      this.spinnersData = true;
    });
  }

  //CategoryId
  getPproductsByCategoryId(categoryId: number) {
    this.productService.getPproductsByCategoryId(categoryId).subscribe((a) => {
      this.products = a;
      this.spinnersData = true;
    });
  }

  //AddToCard
  addToCard(p: Product) {
    this.cartService.addToCart(p);
    this.toastrService.success(p.name + ' Sepete eklendi.');
  }

  //Product Sil
  removeCard(p:Product){
    this.productService.getRemoveProducts(p).subscribe((a)=>{
      let index=this.products.indexOf(p);
      this.products.splice(index,1);
      this.toastrService.error('Ürün başarılı bir şekilde silindi.');
    })
  }
}
