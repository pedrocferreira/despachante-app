import { ClienteformPage } from './../pages/clienteform/clienteform';
import { ClientePage } from './../pages/cliente/cliente';

import { OrcamentoformsPage } from './../pages/orcamentoforms/orcamentoforms';
import { ContasPage } from '../pages/conta/contas';
import { CaminhaoPage } from './../pages/orcamento/caminhao/caminhao';
import { MotoPage } from './../pages/orcamento/moto/moto';
import { CarroPage } from './../pages/orcamento/carro/carro';
import { LoginPage } from './../pages/login/login';
import { CreateContaPage } from './../pages/create-conta/create-conta';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ResetPasswordPage } from './../pages/reset-password/reset-password';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 
 
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.config';
import{ AuthService } from '../providers/auth/auth-service'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PhotoCameraPage } from '../pages/photo-camera/photo-camera';
import { GaleriaPage } from '../pages/galeria/galeria';
import { OrcamentoPage } from '../pages/orcamento/orcamento';

import { ContactProvider } from '../providers/contact/contact';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpClientModule } from '@angular/common/http';
import { ListContasProvider } from '../providers/list-contas/list-contas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResetPasswordPage,
    CreateContaPage,
    PhotoCameraPage,
    LoginPage,
    GaleriaPage,
    OrcamentoPage,
    CarroPage,
    MotoPage,
    CaminhaoPage,
    ContasPage,
    OrcamentoformsPage,
    ClientePage,
    ClienteformPage
    
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicImageViewerModule,
    HttpClientModule
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResetPasswordPage,
    CreateContaPage,
    PhotoCameraPage,
    LoginPage,
    GaleriaPage,
    OrcamentoPage,
    CarroPage,
    MotoPage,
    CaminhaoPage,
    ContasPage,
    OrcamentoformsPage,
    ClientePage,
    ClienteformPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    
    ContactProvider,
    ListContasProvider,
    ClienteformPage
    
    
    
    
    
  ]
})
export class AppModule {



}
