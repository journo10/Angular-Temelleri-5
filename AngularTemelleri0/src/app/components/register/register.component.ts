import { RegisterModel } from './../../models/register.model';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup;

  constructor(private fb:FormBuilder,
              private toastrService:ToastrService,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let RegisterM=Object.assign({},this.registerForm.value);
      this.authService.register(RegisterM).subscribe((a)=>{
        this.toastrService.info('Kayıt oluşturuldu.');
        localStorage.setItem('token', a.token);
        this.router.navigate(['/products/login'])
      })
    }
  }

}

// authservis companenti,İstediğini yapamadın,olmadı 
