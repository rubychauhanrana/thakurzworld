import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
  Submit(){
    console.log(this.LoginForm.value)
    if (this.LoginForm.value.email == "o7services@gmail.com"){
      this.route.navigateByUrl('/layout/home')
    }
    else{
      this.LoginForm.reset();
    }
  }
}
 