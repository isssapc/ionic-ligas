import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the NuevoJugadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nuevo-jugador',
  templateUrl: 'nuevo-jugador.html',
})
export class NuevoJugadorPage {

    @ViewChild('fileInput') fileInput;
    isReadyToSave: boolean;

    item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
      this.form = formBuilder.group({
          profilePic: [''],
          name: ['', Validators.required],
          about: ['']
      });

      // Watch the form for changes, and
      this.form.valueChanges.subscribe((v) => {
          this.isReadyToSave = this.form.valid;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoJugadorPage');
  }

    processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

    getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

}
