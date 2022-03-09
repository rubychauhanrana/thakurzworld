import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  userData:any
  id:any

  constructor(private _userService: UsersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.snapshot.params
    this.id = this.router.snapshot.paramMap.get('id')
    this.getSingleStudent()
  }

  getSingleStudent(){
    this._userService.getSingleUser(this.id).subscribe(
      (res:any) =>{
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }

}
