import { Component, OnInit } from '@angular/core';
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

  }


// function subscribe(res: any, any: any) {
//   throw new Error('Function not implemented.');-->

