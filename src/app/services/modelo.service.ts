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
  urlQuery = '?_sort=orcamento&_order=desc&_limit=5';

  constructor(private _httpClient: HttpClient) { }

  cadastrarModelo(modelo: Modelo): boolean {
    firstValueFrom(this._httpClient.post(this.url, modelo));
    return true;
  }

  buscarModelo(id: number): Promise<Modelo> {
    return firstValueFrom(this._httpClient.get<Modelo>(this.url + id));
  }

  listarModelos(): Promise<Modelo[]> {
    return firstValueFrom(this._httpClient.get<Modelo[]>(this.url + this.urlQuery));
  }

  atualizarModelo(modelo: Modelo, id: number): boolean {
    firstValueFrom(this._httpClient.put(this.url + id, modelo));
    return true;
  }

  excluirModelo(id: number): boolean {
    firstValueFrom(this._httpClient.delete(this.url + id));
    return true;
  }

  obterTodosModelos(): Promise<Modelo[]> {
    return firstValueFrom(this._httpClient.get<Modelo[]>(this.url));
  }
}
