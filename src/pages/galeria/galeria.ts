import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { ContactProvider } from '../../providers/contact/contact';
import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})


export class GaleriaPage {
  _imageViewerCtrl: ImageViewerController;
    public valor;
  public path1 = "https://firebasestorage.googleapis.com/v0/b/scaj-fotos.appspot.com/o/" ;
  public path2 = "?alt=media&token=ce6d63c1-f53a-477c-8390-a94f0d23682b" ; 
  imagens: string[];
  
  constructor(public navCtrl: NavController,
      public provider: ContactProvider,
    imageViewerCtrl: ImageViewerController 
      ) {
    this._imageViewerCtrl = imageViewerCtrl;
   
    this.valor = this.provider.getTudo();
    console.log(this.valor);
    
    

}
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

}