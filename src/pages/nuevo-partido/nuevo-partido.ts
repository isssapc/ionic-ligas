import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nuevo-partido',
  templateUrl: 'nuevo-partido.html',
})
export class NuevoPartidoPage {
  equipos: any;
  id_jornada: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.equipos = navParams.data.equipos;
    this.id_jornada = navParams.data.id_jornada;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPartidoPage');
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

}
