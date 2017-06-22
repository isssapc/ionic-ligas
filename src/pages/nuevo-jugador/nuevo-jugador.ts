import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { AngularFireDatabase } from "angularfire2/database";
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

  id_liga: string;
  id_equipo: string;
  jugador: any = {};
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    private db: AngularFireDatabase) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.id_liga = navParams.data.id_liga;
    this.id_equipo = navParams.data.id_equipo;
    console.log("constructor nuevo jugador", this.id_liga, this.id_equipo);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoJugadorPage');
  }

  crearJugador() {
    const jugadores = this.db.list("/ligas/" + this.id_liga + "/equipos/" + this.id_equipo+"/jugadores");
    jugadores.push(this.jugador);

    this.jugador = {};
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
