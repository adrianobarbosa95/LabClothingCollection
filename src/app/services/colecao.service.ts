import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Colecao } from '../models/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  colecao!: Colecao;
  url = 'http://localhost:3000/colecoes/';
  urlQuery = '?_sort=orcamento&_order=desc&_limit=5'

  constructor(private _httpClient: HttpClient) { }

  cadastrarColecao(colecao: Colecao): boolean {
    firstValueFrom(this._httpClient.post(this.url, colecao));
    return true;
  }

  buscarColecao(id: number): Promise<Colecao> {
    return firstValueFrom(this._httpClient.get<Colecao>(this.url + id));
  }

  listarColecoes(): Promise<Colecao[]> {
    return firstValueFrom(this._httpClient.get<Colecao[]>(this.url + this.urlQuery));
  }

  atualizarColecao(colecao: Colecao, id: number): boolean {
    firstValueFrom(this._httpClient.put(this.url + id, colecao));
    return true;
  }

  excluirColecao(id: number): boolean {
    firstValueFrom(this._httpClient.delete(this.url + id));
    return true;
  }

  obterTodasColecoes(): Promise<Colecao[]> {
    return firstValueFrom(this._httpClient.get<Colecao[]>(this.url));
  }

}
