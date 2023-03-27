import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Modelo } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  modelo!: Modelo;
  url = 'http://localhost:3000/modelos/';

  cadastrarModelo(modelo: Modelo): boolean {
    firstValueFrom(this._httpClient.post(this.url, modelo));
    return true;
  }

  constructor(private _httpClient: HttpClient) { }
buscarModelo(id:number){

  return firstValueFrom(this._httpClient.get<Modelo>(this.url+id));

}

 listarModelos(){
  return firstValueFrom(this._httpClient.get<Modelo[]>(this.url+'?_sort=orcamento&_order=desc&_limit=5'));
}
atualizarModelo(modelo: Modelo, id: number) {
  firstValueFrom(this._httpClient.put(this.url+id, modelo));
  return true;
}

excluirModelo(id:number) {
  firstValueFrom(this._httpClient.delete(this.url+id));
  return true;
}
obterTodosModelos(){
  return firstValueFrom(this._httpClient.get<Modelo[]>(this.url));
}
}
