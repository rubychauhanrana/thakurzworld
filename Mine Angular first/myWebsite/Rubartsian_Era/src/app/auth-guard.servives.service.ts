import { getLocaleDayNames } from '@angular/common';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServivesService {

  Constructor() { }
  SetData (data:any){
    // console.log(data.token)
    sessionStorage.setItem ('token',data.token)
    sessionStorage.setItem ('name',data.data.name)
  }
  getToken(){
    console.log(sessionStorage.getItem('token'))
    return sessionStorage.getItem('token')
  }
  getName(){
    return sessionStorage.getItem('name')
  }
  logout(){
    sessionStorage.clear()
  }
}
