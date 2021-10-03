import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiGKService {
  //Giriş yap apisi
  apiUrlUsers = 'http://localhost:3000/users';
  //Kayıt Ol apisi
  apiUrlRegister = 'http://localhost:3000/registers';

  constructor(private http: HttpClient) {}

  //Giriş yap
  login(obj: any) {
    return this.http.post<any>(this.apiUrlUsers, obj);
  }

  //Kayıt Ol
  register(obj: any) {
    return this.http.post<any>(this.apiUrlRegister, obj);
  }
}
