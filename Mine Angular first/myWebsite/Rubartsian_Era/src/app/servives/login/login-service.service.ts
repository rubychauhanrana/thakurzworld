import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  

  base:any
  constructor(private http: HttpClient, @Inject('base_url') _base:any){
    this.base = _base
  }

  useLogin(data:any){
    return this.http.post(this.base + '/login', data)
  }

}
