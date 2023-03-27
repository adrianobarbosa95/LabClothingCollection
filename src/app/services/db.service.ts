import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
dado!:any;
  constructor(private _httpClient:HttpClient) {     
  }

  async get(url:string) {

    return this._httpClient.get(url);
      
  }

  post(dados:Object, url:string ){
    return this._httpClient.post(url, dados).subscribe((res)=>{console.log(res)});
  }
}
