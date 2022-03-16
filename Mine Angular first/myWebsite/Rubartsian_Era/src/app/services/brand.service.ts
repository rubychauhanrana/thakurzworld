import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthGuardServivesService } from '../auth-guard.servives.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  Token: any | null;
  base: any;

  
  constructor(private http:HttpClient, @Inject('base_url') _base:any, private auth:AuthGuardServivesService )  { 
    this.Token=this.auth.getToken()
    this.base=_base
    console.log(this.Token)
  }
  getBrand(){
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.get(this.base + '/getBrand', {headers: headers})
  }

  addBrand(data:any){
    console.log(data)
    var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token)
    return this.http.post(this.base + '/addBrand',  data, {headers: headers})
  }
  

}
