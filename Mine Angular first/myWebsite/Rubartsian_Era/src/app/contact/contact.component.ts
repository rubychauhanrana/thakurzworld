import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  LoginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  
  })
  constructor(private route:Router) {}

  
    ngOnInit(): void {
    }
    
    Submit(){
       console.log(this.LoginForm.value)
       if (this.LoginForm.value.email == "o7services@gmail.com"){
         this.route.navigateByUrl('/layout/contact')
       }
         else{
           this.LoginForm.reset();
         }
        }
      }

       
      // this._loginService.useLogin(this.LoginForm.value).subscribe(
        // (res:any) =>{
          // console.log(res)
          // if (res.response.status){
            // this.toastr.success('Login Successfully', 'Success')
            // this._authService.setData(res.response)
            // this.route.navigateByUrl('/layout/home')
          // }
          //
            // this.toastr.error(res.response.msg, 'Error')
          // }
        // },
        // err =>{
          // console.log(err)
        // }
      // )-->
