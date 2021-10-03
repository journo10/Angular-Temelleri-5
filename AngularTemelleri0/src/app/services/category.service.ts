import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="http://localhost:3000/categories"
  constructor(private http:HttpClient) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }
}
