import { ApiGKService } from './../../services/api-gk.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GirisModel } from 'src/app/models/giris.model';

@Component({
  selector: 'app-kayit-ol',
  templateUrl: './kayit-ol.component.html',
  styleUrls: ['./kayit-ol.component.css'],
})
export class KayitOlComponent implements OnInit {
  public registerForm: FormGroup;
  public registerObj = new GirisModel();
  
  constructor(private fb: FormBuilder,
             private toastrService: ToastrService,
             private router: Router,
             private apiGKService: ApiGKService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  //Kayıt Ol
  register() {
    this.registerObj.name = this.registerForm.value.name;
    this.registerObj.email = this.registerForm.value.email;
    this.registerObj.password = this.registerForm.value.password;
    
    this.apiGKService.register(this.registerObj).subscribe((a) => {
      this.toastrService.info('Kayıt başarılı bir şekilde gerçekleşti.');
      this.registerForm.reset();
      this.router.navigate(['products/giris-yap']);
    });
  }
}


//apiGk servisi componenti istediğini yapamadın,olmadı
