import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OrcamentoformsPage } from '../../orcamentoforms/orcamentoforms';

/**
 * Generated class for the CarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carro',
  templateUrl: 'carro.html',
})
export class CarroPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }


  onSubmit(form) {
    let total = 0;
    let transferencia = form.value[0];
    let anoveiculo = form.value[1];
    let quantosCV = form.value[2];
    let trocaMuni = form.value[3];
    let segundaViaCRV = form.value[4];
    let comunicacaoVenda = form.value[5];
    let tarja = form.value[6];
    let placaNova = form.value[7];
    let vistoria = form.value[8];

    /// Verificar CV's 
    if (quantosCV === 'menos') {
      if (anoveiculo >= 2014 && anoveiculo <= 2018) {
        total = total + 639;
      }
      if (anoveiculo >= 2003 && anoveiculo <= 2013) {
        total = total + 448;
      }

      if (anoveiculo <= 2002) {
        total = total + 423;
      }

    }
    if (transferencia === 'nao') {
      if (quantosCV === 'menos') {
        if (anoveiculo >= 2014 && anoveiculo <= 2018) {
          total = total - 639;
        }
        if (anoveiculo >= 2014 && anoveiculo <= 2013) {
          total = total - 448;
        }
        if (anoveiculo <= 2002) {
          total = total - 423;
        }
      }
    }
    if (transferencia === 'nao') {
      if (quantosCV === 'mais') {
        if (anoveiculo >= 2014 && anoveiculo <= 2018) {
          total = total - 975;
        }
        if (anoveiculo >= 2014 && anoveiculo <= 2013) {
          total = total - 593;
        }
        if (anoveiculo <= 2002) {
          total = total - 568;
        }
      }
    }


    if (quantosCV === 'mais') {
      if (anoveiculo >= 2014 && anoveiculo <= 2018) {
        total = total + 975;
      }
      if (anoveiculo >= 2003 && anoveiculo <= 2013) {
        total = total + 593;
      }

      if (anoveiculo <= 2002) {
        total = total + 568;
      }

    }


    //troa de muni 
    if (anoveiculo >= 2003 && anoveiculo <= 2018) {
      if (trocaMuni === 'sim') {
        total = total + 303;
      }
      if (trocaMuni === 'nao') {
        total = total + 0;
      }

    }
    /// troca de muni menor 2002
    if (anoveiculo <= 2002) {
      if (trocaMuni === 'sim') {
        total = total + 278;
      }
      if (trocaMuni === 'nao') {
        total = total + 0;
      }
    }


    // pedir segunda via CRV

    if (segundaViaCRV === 'sim') {
      total = total + 219;
    }
    if (segundaViaCRV === 'nao ') {
      total = total + 0;

    }

    // comunicacao de venda 

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


    //placa nova

    if (placaNova === 'uma') {
      total = total + 70;
    }
    if (placaNova === 'duas') {
      total = total + 140
    }
    if (placaNova === 'nao') {
      total = total + 0;
    }

    //vistoria 




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
