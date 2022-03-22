import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
// import { UsersService } from '../services/users.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userData: any;

  constructor(private _userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers()
  }
getUsers(){
  this._userService.getUser().subscribe(
  (res:any) =>{
    console.log(res)
    this.userData=res.response.data
    console.log(this.userData)
  },
  (  err: any) =>{
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


// function subscribe(res: any, any: any) {
//   throw new Error('Function not implemented.');-->

