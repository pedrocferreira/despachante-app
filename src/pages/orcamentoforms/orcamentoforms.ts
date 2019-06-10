import { ContasPage } from '../conta/contas';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

/**
 * Generated class for the OrcamentoformsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orcamentoforms',
  templateUrl: 'orcamentoforms.html',
})
export class OrcamentoformsPage {
  placaVeiuclo: any;
  debDetran: any;
  renavam: any;
  valorAut: any;
  valorTotal: any;
  ref: any;
  lucro: any;
  deb: any;
  aut: any;
  parms: any;
  cliente: any;
  idcliente : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController) {
    this.refPage();
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Fazendo o registro...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(ContasPage);
    }, 2500);
  }
  refPage() {
    this.ref = this.navParams.get("parms")
  }


  data: Observable<any>;

  postDataa() {


    this.parms = this.ref;
    this.deb = this.debDetran;
    this.aut = this.valorAut;
    this.idcliente = this.cliente;
    this.valorTotal = (parseFloat(this.deb)) + (parseFloat(this.parms));
    this.lucro = (parseFloat(this.valorTotal)) - (parseFloat(this.aut));


    let postData = {
      "id": null,
      "valorTotal": this.valorTotal,
      "placa": this.placaVeiuclo,
      "renavam": this.renavam,
      "lucro": this.lucro,
      "idcliente": this.idcliente

    }

    var url = "http://localhost:3000/apiscaj/inserir";

    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {
      console.log(data);
    })
    this.presentLoadingDefault();
  }


  onKeyplacaVeiuclo(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement> evento.target).value);

    this.placaVeiuclo = (<HTMLInputElement>evento.target).value;



    console.log(this.placaVeiuclo);


  }

  onKeydebDetran(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement> evento.target).value);

    this.debDetran = (<HTMLInputElement>evento.target).value;



    console.log(this.debDetran);


  }

  onKeyrenavam(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement> evento.target).value);

    this.renavam = (<HTMLInputElement>evento.target).value;

    console.log(this.renavam);


  }
  onKeyvalorAut(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement> evento.target).value);

    this.valorAut = (<HTMLInputElement>evento.target).value;
    this.valorTotal = this.valorTotal + this.valorAut;
    console.log(this.valorAut);


  }
  onKeyConta(evento: KeyboardEvent) {
    this.cliente = (<HTMLInputElement>evento.target).value;
    console.log(this.cliente);
  }


}      
