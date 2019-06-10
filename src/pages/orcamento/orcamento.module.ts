import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrcamentoPage } from './orcamento';
import { CarroPage } from '../orcamento/carro/carro';

@NgModule({
  declarations: [
    OrcamentoPage,
    CarroPage
  ],
  imports: [
    IonicPageModule.forChild(OrcamentoPage),
    CarroPage
  ],
})
export class OrcamentoPageModule {}
