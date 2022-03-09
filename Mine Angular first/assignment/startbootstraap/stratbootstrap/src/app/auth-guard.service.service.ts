import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor() { }

  setData(data:any){
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('name', data.data.name)
  }


  getToken(){
    return sessionStorage.getItem('token')
  }

  getName(){
    return sessionStorage.getItem('name')
  }

  logout(){
    sessionStorage.clear()
  }
}
