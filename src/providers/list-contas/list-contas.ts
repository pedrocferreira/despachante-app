import { Entrada } from './../../modelos/entrada';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListContasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListContasProvider Provider');
  }

  lista() {
    return this.http.get<Entrada[]>('http://localhost:3000/apiscaj/orcamentos');//botar localhost aqui para testar listaPArceiors, depois dar deploy na api no umbler...ps:tem que achar o destino do deploy
  }

  totalLucro(){
    return this.http.get('http://localhost:3000/apiscaj/orcamentos/lucro');
  }
  listPid(id){
   let  DataPost = {
      "id": id
    }
    let url =" http://localhost:3000/apiscaj/orcamentos/edit/return"

    return this.http.post(url,DataPost)

  }
  

}
