import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Colecao } from '../models/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {
  
  
  
 
  colecao!: Colecao;
  url = 'http://localhost:3000/colecoes/';

  cadastrarColecao(colecao: Colecao): boolean {
    firstValueFrom(this._httpClient.post(this.url, colecao));
    return true;
  }

  constructor(private _httpClient: HttpClient) { }
buscarColecao(id:number){

  return firstValueFrom(this._httpClient.get<Colecao>(this.url+id));

}

 listarColecoes(){
  return firstValueFrom(this._httpClient.get<Colecao[]>(this.url+'?_sort=orcamento&_order=desc&_limit=5'));
}
atualizarColecao(colecao: Colecao, id: number) {
  firstValueFrom(this._httpClient.put(this.url+id, colecao));
  return true;
}

excluirColecao(id:number) {
  firstValueFrom(this._httpClient.delete(this.url+id));
  return true;
}
obterTodasColecoes(){
  return firstValueFrom(this._httpClient.get<Colecao[]>(this.url));
}

}
