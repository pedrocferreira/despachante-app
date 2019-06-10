import { HomePage } from './../home/home';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../providers/auth/auth-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PhotoCameraPage } from '../photo-camera/photo-camera';
import { CreateContaPage } from '../create-conta/create-conta';

import { storage, initializeApp } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { User } from '../../providers/auth/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = new User();

  @ViewChild('form') form: NgForm;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private AuthService: AuthService, private toastCtrl: ToastController) {
    //initializeApp(FIREBASE_CONFIG);
  }

  criarConta() {
    this.navCtrl.push(CreateContaPage);
  }

  signIn() {
    if(this.form.form.valid){
      this.AuthService.signIn(this.user)
      .then(() => {
        this.navCtrl.setRoot(HomePage);

      })
      .catch((error: any)=> {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
        
      })
      .catch((error: any)=> {
        let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        if (error.code == 'auth/invalid-email') {
          toast.setMessage('O e-mail digitado não é valido.');
        } else if (error.code == 'auth/user-disabled') {
          toast.setMessage('O usuário está desativado.');
        } else if (error.code == 'auth/user-not-found') {
          toast.setMessage('O usuário não foi encontrado.');
        } else if (error.code == 'auth/wrong-password') {
          toast.setMessage('A senha digitada não é valida.');
        }
        toast.present();
      })

    }

    

  }
  async takePhoto(form) {
    let descricao = form.value['descricao'];
    console.log(descricao);

    try {

      const options: CameraOptions = {
        quality: 100,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true
      }

      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const pictures = storage().ref(descricao);
      pictures.putString(image, 'data_url');




    }
    catch (e) {
      console.error(e);

    }

  }
}
