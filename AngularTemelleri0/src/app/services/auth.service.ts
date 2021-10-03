import { RegisterModel } from './../models/register.model';
import { Observable } from 'rxjs';
import { UserModel } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrlUsers = 'http://localhost:3000/users';
  apiUrlRegister="http://localhost:3000/registers";

  constructor(private http: HttpClient) {}

  //Giriş yap
  login(userModel: UserModel):Observable<TokenModel>{
    return this.http.post<TokenModel>(this.apiUrlUsers, userModel);
  }

  //Kayıt Ol
  register(registerModel:RegisterModel):Observable<TokenModel>{
    return this.http.post<TokenModel>(this.apiUrlRegister,registerModel);
  }

  //Token
  isAuthhenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}

//Bu servis token ile login ve register olmaya çalıştın olmadı yapamadın.
