import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthGuardServivesService } from '../auth-guard.servives.service';
import { LoginServiceService } from '../servives/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })


  constructor(private route: Router, private _loginService: LoginServiceService, private toastr: ToastrService, private _authService: AuthGuardServivesService,private Spinner : NgxSpinnerService){ }

  ngOnInit(): void {
  }
  submit(){
    this.Spinner.show()
    // console.log(this.loginForm.value)
  //   if (this.loginForm.value.email == "o7services@gmail.com" && this.loginForm.value.password == "o7services")
  //   {
  //     this.route.navigateByUrl('/layout/home')
  //   }
  //   else{
  //     this.loginForm.reset();

  this._loginService.useLogin(this.loginForm.value).subscribe(
    (res:any) =>{
      this.Spinner.hide()
      console.log(res)
      if (res.response.status){
        this.toastr.success('Login Successfully', 'Success')
        this._authService.SetData(res.response)
        this.route.navigateByUrl('/layout/home')
      }
      else{
        this.toastr.error(res.response.msg, 'Error')
      }
    },
    err =>{
      this.Spinner.hide()
      console.log(err)
    }
  )
}


}

