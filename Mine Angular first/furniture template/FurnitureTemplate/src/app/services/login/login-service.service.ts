import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  base_url: any

  constructor(private http: HttpClient, @Inject('base_url') _base:any) {
    this.base_url = _base
   }

  useLogin(form:any){
    return this.http.post(this.base_url + "/login", form)
  }
}
