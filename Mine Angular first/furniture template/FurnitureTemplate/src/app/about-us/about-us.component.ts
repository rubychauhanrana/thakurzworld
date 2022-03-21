import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  // userType:any

  // userData:any

  // users = [{name: 'abc', email:'a@a.com'},
  //           {name: 'bcd', email: 'b@b.com'},]
  userData: any;
            // {name: 'cde', email: 'c@c.com'}]

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    // this.userType = 'Others'
    this.getUsers()
  }

  getUsers(){
    this._userService.getUser().subscribe(
      (res:any) =>{
        console.log(res)
        this.userData = res.response.data
        console.log(this.userData)
      },
      err =>{
        console.log(err)
      }
    )
  }

  openDialog(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {

        this._userService.deleteUser(id).subscribe(
          (res:any) =>{
            if (res.response.status){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.getUsers()
            }
          },
          err =>{
            console.log(err)
          }
        )

        
      }
    })
  }

}
