import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteformPage } from './clienteform';

@NgModule({
  declarations: [
    ClienteformPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteformPage),
  ],
})
export class ClienteformPageModule {}
