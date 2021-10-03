import { Product } from './../../models/product.model';
import { Category } from './../../models/category.model';
import { CategoryService } from './../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  categories: Category[] = [];
  productModel:Product[]; 
  categoryId:"";//Seçiniz kısmı görünmesi için unutma.
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategoryId();
  }

  //Categoryleri getirmek için categoryId den dolayı
  getCategoryId() {
    this.categoryService.getCategory().subscribe((a) => {
      this.categories = a;
    });
  }

  createProductAddForm() {
    this.productAddForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  //click
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (a) => {
          this.toastrService.success('Ürün başarılı bir şekilde eklendi.');
          this.router.navigate(['/products']);
          console.log(a);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
    } else {
      this.toastrService.error(
        'Form eksik ya da hatalıdır,bilgileri doğru griniz.'
      );
    }
  }
}
