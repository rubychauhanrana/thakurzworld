import { Component, OnInit } from '@angular/core';
import { AuthGuardServivesService } from '../auth-guard.servives.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token:any=''
  route: any;


  constructor(private _authService:AuthGuardServivesService) { }

  ngOnInit(): void {
    this.token=this. _authService.getToken()
    if(this.token! ==null){
      this.route.navigateByurl('')
    }
  }

}
