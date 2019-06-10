import { ClientePage } from './../pages/cliente/cliente';
import { ContasPage } from './../pages/conta/contas';
import { OrcamentoPage } from './../pages/orcamento/orcamento';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../pages/home/home';
import { GaleriaPage } from './../pages/galeria/galeria';

import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PhotoCameraPage } from '../pages/photo-camera/photo-camera';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;
  @ViewChild('mymenu') menu : MenuController; 
  rootPage: any;
  
    

 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, afAuth: AngularFireAuth,public menuCtrl: MenuController ) {

    const authObserver = afAuth.authState.subscribe(user => {
      if(user){
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    })
    platform.ready().then(() => {
     // initializeApp(FIREBASE_CONFIG);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


  

    });
  }

  goGaleria(){
    this.app.getActiveNav().setRoot(GaleriaPage);
    this.menuCtrl.close();
  }
  goTocamera() {
    this.app.getActiveNav().setRoot(PhotoCameraPage);
    this.menuCtrl.close();
  }
  gotohome(){
    this.app.getActiveNav().setRoot(HomePage);
    this.menuCtrl.close();
  }
  gotoOrcamento(){
    this.app.getActiveNav().setRoot(OrcamentoPage);
    this.menuCtrl.close();
  }
  goContas() {
    this.app.getActiveNav().setRoot(ContasPage);
    this.menuCtrl.close();
  }
  goClientes() {
    this.app.getActiveNav().setRoot(ClientePage);
    this.menuCtrl.close();
  }
 
}


