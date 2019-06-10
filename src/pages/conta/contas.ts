
import { Entrada } from './../../modelos/entrada';
import { ListContasProvider } from './../../providers/list-contas/list-contas';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { OrcamentoformsPage } from '../orcamentoforms/orcamentoforms';
import { Observable } from 'rxjs/observable';


/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {
  public orcamento: Entrada[];
  public lucro = '0'; 
  public sLucro: String;
  servico : number = 160 ;
  data: Observable<any>;
  data2: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public orcamentosService: ListContasProvider,
    private loadingCtrl: LoadingController,
    ) {
      this.lucro2();


    let loading = this.loadingCtrl.create({
      content: 'Aguarde o carragamento dos orçamentos'
    })



    loading.present();


    this.orcamentosService.lista()
      .subscribe(
        (orcamento) => {
          this.orcamento = orcamento;
          loading.dismiss();

        },
        (error: HttpErrorResponse) => {
          console.log(error);
          loading.dismiss();

          this.alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possivel carregar os orcamentos, tente novamente mais tarde ',
            buttons: [
              { text: 'OK' }
            ]
          }).present();
        }
      );



  }

  
  openorcamento(){
    this.navCtrl.push(OrcamentoformsPage, {parms : this.servico});
  }

  delet(id){
    
    let postData = {
      "id": id
    }
    const url = "http://localhost:3000/apiscaj/orcamentos/delete"
    
    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {
      console.log(data);
    })
    this.presentLoadingDefaultrm();
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
  presentLoadingDefaultrm() {
    let loading = this.loadingCtrl.create({
      content: 'Apagando o registro...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(ContasPage);
    }, 2500);
  }


  lucro2(){

    
    
    const urlLucro = "http://localhost:3000/apiscaj/orcamentos/lucro"
    this.data = this.http.get(urlLucro);
    this.data.subscribe(data => {
    console.log(this.data[0]);
      
    this.lucro = data[0];
    console.log(this.lucro["sum(lucro)"]);
    this.sLucro = this.lucro["sum(lucro)"] 
    console.log(this.sLucro);
    
    })

  

  }
  

 

}
