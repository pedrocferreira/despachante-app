import { CaminhaoPage } from './caminhao/caminhao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroPage } from '../orcamento/carro/carro';
import { MotoPage } from './moto/moto';

/**
 * Generated class for the OrcamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html',
})
export class OrcamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoCarro(){
    this.navCtrl.push(CarroPage)
  }
  gotoMoto(){
    this.navCtrl.push(MotoPage)
  }
  gotoCaminhao(){
    this.navCtrl.push(CaminhaoPage)
  }

}
