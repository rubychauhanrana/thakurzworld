import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardServiceService } from '../auth-guard.service.service';
import { LoginServiceService } from '../services/login/login-service.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')

})
constructor(private route: Router, private _loginService: LoginServiceService, private _authService: AuthGuardServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  Submit(){
    // console.log(this.LoginForm.value)
    // if (this.LoginForm.value.email == "o7services@gmail.com"){
      // this.route.navigateByUrl('/layout/home')
    // -->
     
    this._loginService.useLogin(this.LoginForm.value).subscribe(
      (res:any) =>{
        console.log(res)
        if (res.response.status){
          this.toastr.success('Login Successfully', 'Success')
          this._authService.setData(res.response)
          this.route.navigateByUrl('/layout/home')
        }
        else{
          this.toastr.error(res.response.msg, 'Error')
        }
      },
      err =>{
        console.log(err)
      }
    )
  }
}