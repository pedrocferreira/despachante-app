import { PhotoCameraPage } from './../photo-camera/photo-camera';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateContaPage } from './create-conta';


@NgModule({
  declarations: [
    CreateContaPage,
    PhotoCameraPage
  ],
  imports: [
    IonicPageModule.forChild(CreateContaPage),
    PhotoCameraPage
  ],
})
export class CreateContaPageModule {}
