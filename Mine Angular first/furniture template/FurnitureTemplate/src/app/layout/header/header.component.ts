import { Component, OnInit } from '@angular/core';
import { AuthGuardServiceService } from 'src/app/services/auth/auth-guard-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthGuardServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this._authService.logout()
  }
}
