import { Observable } from 'rxjs/observable';
//import { Entrada } from './../../../modelos/entrada';

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OrcamentoformsPage } from '../../orcamentoforms/orcamentoforms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the CaminhaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-caminhao',
  templateUrl: 'caminhao.html',
})
export class CaminhaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController) {
  }
  data: Observable<any>;

  anos = [
    { id: 1970 },
    { id: 1971 },
    { id: 1972 },
    { id: 1973 },
    { id: 1974 },
    { id: 1975 },
    { id: 1976 },
    { id: 1977 },
    { id: 1978 },
    { id: 1979 },
    { id: 1980 },
    { id: 1981 },
    { id: 1982 },
    { id: 1983 },
    { id: 1984 },
    { id: 1985 },
    { id: 1986 },
    { id: 1987 },
    { id: 1988 },
    { id: 1989 },
    { id: 1990 },
    { id: 1991 },
    { id: 1992 },
    { id: 1993 },
    { id: 1994 },
    { id: 1995 },
    { id: 1996 },
    { id: 1997 },
    { id: 1998 },
    { id: 1999 },
    { id: 2000 },
    { id: 2001 },
    { id: 2002 },
    { id: 2003 },
    { id: 2004 },
    { id: 2005 },
    { id: 2006 },
    { id: 2007 },
    { id: 2008 },
    { id: 2009 },
    { id: 2010 },
    { id: 2011 },
    { id: 2012 },
    { id: 2013 },
    { id: 2014 },
    { id: 2015 },
    { id: 2016 },
    { id: 2017 },
    { id: 2018 },
    { id: 2019 }




  ]

  onsubmit(form) {
    var total = 0;
    let anoVeiculo = form.value[1];
    let trocaMuni = form.value[2];
    let segundaCRV = form.value[3];
    let comunicacaoVenda = form.value[4];
    let tarja = form.value[5];
    //let placanova = form.value[6];
    // let vistoria = form.value[7];



    if (anoVeiculo >= 2014 && anoVeiculo <= 2019) {
      total = total + 964;
    }

    if (trocaMuni === 'sim') {
      if (anoVeiculo >= 2003 && anoVeiculo <= 2019) {
        total = total + 340;
      }
      if (anoVeiculo <= 2002) {
        total = total + 316;
      }
    }

    //pedir segunda via docuemnto 


    if (segundaCRV === 'sim') {
      total = total + 257;
    }
    if (segundaCRV === 'nao') {
      total = total + 0;
    }
    /// comunicao de venda 
    if (comunicacaoVenda === 'sim') {
      total = total + 34;
    }

    if (comunicacaoVenda === 'nao') {
      total = total + 0;
    }

    //tarja 

    if (tarja === 'sim') {
      total = total + 70;
    }
    if (tarja === 'nao') {
      total = total + 0;
    }
    total = 160 + total;
    alert(total);
    this.presentLoadingDefault(total);

  }
  presentLoadingDefault(total) {
    let loading = this.loadingCtrl.create({
      content: 'Carregando ...'

    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push(OrcamentoformsPage, { parms: total });
    }
      , 2000);

  }


  /* goForms() {
    

   
    let postData = {
      "id": null ,
      "valorTotal": "5555" ,
      "placa": "ikf7972",
      "renavam": "5555555",
      "lucro": " 555555555",

    }

    var url = "http://localhost:3000/apiscaj/inserir";
    
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data, );
      
    })


  } */

}

