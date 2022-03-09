import { getLocaleDayNames } from '@angular/common';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServivesService {

  Constructor() { }
  SetData (data:any){
    console.log(data)
    sessionStorage.setItem ('token',data.token)
    sessionStorage.setItem ('name',data.data.name)
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
