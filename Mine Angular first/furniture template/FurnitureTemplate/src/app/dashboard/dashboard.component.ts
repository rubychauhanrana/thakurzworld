import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardServiceService } from '../services/auth/auth-guard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  token:any = ''
  
  constructor(private _authService: AuthGuardServiceService, private route: Router) { }

  ngOnInit(): void {
    this.token = this._authService.getToken()
    console.log(this.token)
    if (this.token == null){
      this.route.navigateByUrl('')
    }
  }

}
