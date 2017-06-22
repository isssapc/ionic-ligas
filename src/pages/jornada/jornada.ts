import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the JornadaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jornada',
  templateUrl: 'jornada.html',
})
export class JornadaPage {
  id_jornada: string;
  nombre_jornada: string;
  equipos: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.id_jornada = navParams.data.id_jornada;
    this.nombre_jornada = navParams.data.nombre_jornada;
    this.equipos = navParams.data.equipos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadaPage');
  }

  gotoNuevoPartido() {
    //this.navCtrl.push("NuevoPartidoPage");
    let modal = this.modalCtrl.create("NuevoPartidoPage", { id_jornada: this.id_jornada, equipos: this.equipos });
    modal.present();
  }

  gotoActaArbitral() {
    this.navCtrl.push("ActaArbitralPage");
  }
}
