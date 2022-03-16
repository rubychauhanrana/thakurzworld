import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id:any
  constructor(private router: ActivatedRoute, private _userService: UserServiceService, private route: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
  }

  sendBack(){
    this.route.navigateByUrl('/layout/about')
  }

  deleteUser(){
    this._userService.deleteUser(this.id).subscribe(
      (res:any) =>{
        if (res.response.status){
          this.toaster.success(res.response.msg)
          this.route.navigateByUrl('/layout/about')
        }
      },
      (      err: string | undefined) =>{
        this.toaster.error(err, 'Error')
        console.log(err)
      }
    )
  }

}
