//import { FIREBASE_CONFIG } from './../../app/firebase.config';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder,   Validators, FormGroup } from '@angular/forms';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-photo-camera',
  templateUrl: 'photo-camera.html',
})
export class PhotoCameraPage {
  contact: any;

  title: string;
  form : FormGroup;
  random ;
 
  descricaoo: string;
  urll: any;

  constructor(private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: ContactProvider,
    private toast: ToastController) {
    //initializeApp(FIREBASE_CONFIG);
    this.contact = this.navParams.data.contact || {

      
    };
    this.createForm();

  } 
  onKeyup(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement> evento.target).value);

    this.descricaoo = (<HTMLInputElement>evento.target).value;
    console.log(this.descricaoo);
   this.descricaoo.replace(/^\s+|\s+$/g, '');
    

  


  }
  async takePhoto() {
    
    
  
    var descricao = this.descricaoo;
    try {

      const options: CameraOptions = {
        quality: 100,
        targetHeight: 800,
        targetWidth: 600,
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
      alert("errooor");

    }

  }

  


  public setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo contato';
  }

  createForm() {
    
    console.log(this.random);
    this.contact.url = this.descricaoo;
    
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      tel: [this.contact.tel, Validators.required],
      descricao: [this.contact.descricao],
      url: [this.contact.url]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Foto salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.setRoot(PhotoCameraPage);
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Foto.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }






}



