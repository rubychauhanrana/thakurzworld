import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';

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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.loginForm.value)
    if (this.loginForm.value.email == "o7services@gmail.com" && this.loginForm.value.password == "o7services")
    {
      this.route.navigateByUrl('/layout/home')
    }
    else{
      this.loginForm.reset();
    }
  }

}
