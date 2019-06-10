import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

/**
 * Generated class for the ClienteformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clienteform',
  templateUrl: 'clienteform.html',
})
export class ClienteformPage {

  nome: any;
  cpf: any;
  placa: any;
  pagou: any;
  recebeu: any;
  nota: any;





  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController) {
  }

  data: Observable<any>;

  postDataa() {
    this.nome = this.nome;
    this.cpf = this.cpf;
    this.placa = this.placa;
    this.pagou = this.pagou;
    this.recebeu = this.recebeu;
    this.nota = this.nota;

    

    let postData = {
      "id": null,
      "nome": this.nome,
      "cpf": this.cpf,
      "placa": this.placa,
      "pagou": this.pagou,
      "recebeu": this.recebeu,
      "nota": this.nota

    }

    var url = "http://localhost:3000/apiscaj/contas/inserir";

    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {
      console.log(data);
    })
   
  }




  registerNome(evento: KeyboardEvent) {
    this.nome = (<HTMLInputElement>evento.target).value;
  }

  registerCPF(evento: KeyboardEvent) {
    this.cpf = (<HTMLInputElement>evento.target).value;
  }

  registerPlaca(evento: KeyboardEvent) {
    this.placa = (<HTMLInputElement>evento.target).value;
  }

  registerPagou(evento: KeyboardEvent) {
    this.pagou = (<HTMLInputElement>evento.target).value;
    console.log(this.pagou);
  }

  registerRecebeu(evento: KeyboardEvent) {
    this.recebeu = (<HTMLInputElement>evento.target).value;
  }

  registerNota(evento: KeyboardEvent) {
    this.nota = (<HTMLInputElement>evento.target).value;
  }


}
