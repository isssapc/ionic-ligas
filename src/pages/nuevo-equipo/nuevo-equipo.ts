import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";


@IonicPage()
@Component({
  selector: 'page-nuevo-equipo',
  templateUrl: 'nuevo-equipo.html',
})
export class NuevoEquipoPage {
  id_liga: string;
  equipo: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    private db: AngularFireDatabase) {
    this.id_liga = navParams.data.id_liga;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoEquipoPage');
  }

  crearEquipo() {
    const equipos = this.db.list("/liga/" + this.id_liga + "/equipos");
    equipos.push(this.equipo);

    this.equipo = {};
  }

    cerrar(){
    this.viewCtrl.dismiss();
  }

}
