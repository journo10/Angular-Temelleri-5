import { KayitOlComponent } from './components/kayit-ol/kayit-ol.component';
import { GirisYapComponent } from './components/giris-yap/giris-yap.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'products/add',component:ProductAddComponent,canActivate:[LoginGuard]},
  { path: 'products/login',component:LoginComponent},
  { path: 'products/register',component:RegisterComponent},
  { path: 'products/:productsId',component:ProductDetailsComponent},
  
  // { path: 'products/kayit-ol',component:KayitOlComponent},
  // { path: 'products/giris-yap',component:GirisYapComponen,t}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
