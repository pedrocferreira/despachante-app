import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoCameraPage } from './photo-camera';

@NgModule({
  declarations: [
    PhotoCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoCameraPage),
  ],
})
export class PhotoCameraPageModule {}
