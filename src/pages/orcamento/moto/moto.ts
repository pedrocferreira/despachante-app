import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OrcamentoformsPage } from '../../orcamentoforms/orcamentoforms';

/**
 * Generated class for the MotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-moto',
  templateUrl: 'moto.html',
})
export class MotoPage {

  total: number;


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



  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public loadingCtrl: LoadingController) {
  }



  onSubmit(form) {
    let total = 0;
    let trasferencia = form.value[0];
    let anoVeiculo = form.value[1];
    let trocaMuni = form.value[2];
    let segundaCRV = form.value[3];
    let comunicacaoVenda = form.value[4];
    let tarja = form.value[5];
    let placanova = form.value[6];
    let vistoria = form.value[7];

    //trasnferencia

    if (trasferencia === 'sim') {
      if (anoVeiculo >= 2014 && anoVeiculo <= 2019) {
        total = total + 372.5;
      }
      if (anoVeiculo >= 2003 && anoVeiculo <= 2013) {
        total = total + 328;
      }

      if (anoVeiculo <= 2002) {
        total = total + 304;
      }
    }

    if (trasferencia === 'nao') {
      total = total = 0;
    }

    //troca de municicipio
    if (anoVeiculo >= 2014 && anoVeiculo <= 2019) {

      if (trocaMuni == 'sim') {
        total = total + 282, 72;

      }
      if (trocaMuni == 'nao') {
        total = total + 0;
      }

    }

    if (anoVeiculo >= 2003 && anoVeiculo <= 2013) {

      if (trocaMuni === 'sim') {
        total = total + 257, 84;

      }
      if (trocaMuni === 'nao') {
        total = total + 0;

      }
    }

    if (trocaMuni === 'sim') {
      if (anoVeiculo >= 2003 && anoVeiculo <= 2013) {


      }
    }

    if (anoVeiculo < 2003) {
      if (trocaMuni === 'sim') {
        total = total + 258
      }

      if (trocaMuni == 'nao') {
        total = total + 0;
      }
    }


    // Pedir segunda via 

    if (segundaCRV === 'sim') {
      total = total + 199;

    } if (segundaCRV === 'nao') {
      total = total + 0;

    }
    //comunicacao de venda

    if (comunicacaoVenda === 'sim') {
      total = total + 34;
    }
    if (comunicacaoVenda === 'nao') {
      total = total + 0;
    }

    //tarja

    if (tarja === 'sim') {
      total = total + 35;
    }
    if (tarja === 'nao') {
      total = total + 0;
    }

    if (placanova === 'sim') {
      total = total + 70.2;
    }

    //vistoria

    if (vistoria === 'sim') {

      total = total + 57
    }

    if (vistoria == 'nao') {
      total = total + 0;

    }
    total = total + 160;

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


}
