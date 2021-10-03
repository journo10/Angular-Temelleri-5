import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = ' http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  //Products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  //Products detay
  getProductsById(productsId: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + productsId);
  }

  //CategoryId rout kısmı
  getPproductsByCategoryId(categoryId: number): Observable<Product[]> {
    let newPath = this.apiUrl + '?categoryId=' + categoryId;
    return this.http.get<Product[]>(newPath);
  }

  //Product eklemek için
  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  //Product Sil
  getRemoveProducts(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + '/' + product.id);
  }
}
