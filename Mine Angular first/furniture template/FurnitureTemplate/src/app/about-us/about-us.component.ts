import { Component, OnInit } from '@angular/core';
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

}
