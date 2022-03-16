import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:any
  userData:any

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    // password: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private _userService: UserServiceService, private toaster: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')

    this.getSingleStudent()
  }

  getSingleStudent(){
    this._userService.getSingleUser(this.id).subscribe(
      (res:any) =>{
        console.log(res)
        this.userData = res.response.data
        this.userForm.patchValue({name: res.response.data.name})
        this.userForm.patchValue({email: res.response.data.email})
        // this.userForm.patchValue({password: res.response.data.password})
      },
      err =>{
        console.log(err)
      }
    )
  }

  submit(){
    console.log(this.userForm.value)
    var a = new FormData()
    a.append('name', this.userForm.value.name)
    a.append('email', this.userForm.value.email)

    this._userService.updateUser(a, this.id).subscribe(
      (res:any) =>{
        console.log(res)
        if (res.response.status){
          this.toaster.success(res.response.msg, 'Success')
          this.route.navigateByUrl('/layout/home')
        }
      },
      err =>{
        console.log(err)
      }
    )
  }

}
