import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthGuardServiceService } from './auth/auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  base:any
  token:any

  constructor(private http: HttpClient, @Inject('base_url') _base:any, private auth: AuthGuardServiceService) {
    this.token = this.auth.getToken()
    this.base = _base
   }

  getUser(){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
    return this.http.get(this.base + '/getStudent', {headers: headers})
  }

  getSingleUser(id:any){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
    return this.http.get(this.base + '/getStudentById/' + id, {headers: headers})
  }

  deleteUser(id:any){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
    return this.http.delete(this.base + '/deleteStudent/' + id, {headers: headers})
  }

}
