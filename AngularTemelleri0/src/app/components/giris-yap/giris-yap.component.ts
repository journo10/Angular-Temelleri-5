import { GirisModel } from './../../models/giris.model';
import { ApiGKService } from './../../services/api-gk.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-giris-yap',
  templateUrl: './giris-yap.component.html',
  styleUrls: ['./giris-yap.component.css'],
})
export class GirisYapComponent implements OnInit {
  public loginForm: FormGroup;
  public loginObj = new GirisModel();

  constructor(private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private router: Router,
              private apiGKService: ApiGKService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  //Giriş yap
  login() {
    this.loginObj.email=this.loginForm.value.email;
    this.loginObj.password=this.loginForm.value.password;

    this.apiGKService.login(this.loginObj).subscribe((a)=>{
      this.toastrService.info('Giriş yapıldı.');
      this.router.navigate(['products/add']);
    })
  }
}

//apiGk servisi componenti istediğini yapamadın,olmadı
