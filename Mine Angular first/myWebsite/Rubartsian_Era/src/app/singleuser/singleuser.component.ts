import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  id:any| string | null;

  data:any

  constructor(private _userServices:UserServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.getSingleUser()
  }
  getSingleUser(){
    this._userServices.getSingleUser(this.id).subscribe(
      (res:any)=>{
        console.log(res)
        this.data = res.response.data
      },
      err=>{
        console.log(err)
      }
    )
  }
}
