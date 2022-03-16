import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthGuardServivesService } from './auth-guard.servives.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Token: any | null;
  base: any;

  
  constructor(private http:HttpClient, @Inject('base_url') _base:any, private auth:AuthGuardServivesService )  { 
    this.Token=this.auth.getToken()
      this.base=_base
  }
  getUser(){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.get(this.base + '/getStudent', {headers: headers})
  }

  getSingleUser(id:any){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.get(this.base + '/getStudentById/' + id, {headers: headers})
  }
  deleteUser(id:any){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.delete(this.base + '/deleteStudent/' + id, {headers: headers})
  }

  updateUser(data:any, id:any){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.post(this.base + '/updateStudent/' + id, data, {headers: headers})
  }

}

//   gettoken(): any {
//     throw new Error('Method not implemented.');
//   }
//    setData: (data:any){
//      sessionStorage.setItem('token',data.data.token)
//      sessionStorage.setItem(name,data.data.name)
//    }
//    getToken(){
//      return sessionStorage.getItem('token')
//    }
//    getLocaleDayNames(){
//      return sessionStorage.getItem('name')
//    }
// logout(){
//   sessionStorage.clear()
// }
