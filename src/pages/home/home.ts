import { AuthService } from './../../providers/auth/auth-service';



import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: AuthService) {


  }
  signOut() {

    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage)
      })
      .catch((error) => {
        console.error(error);

      })
  }





}
