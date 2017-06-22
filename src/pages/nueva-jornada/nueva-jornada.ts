import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-nueva-jornada',
  templateUrl: 'nueva-jornada.html',
})
export class NuevaJornadaPage {
 

  jornada: any = {};
  id_liga: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    private db: AngularFireDatabase) {
    this.id_liga = navParams.data.id_liga;
    console.log("navParams", navParams.data.id_liga);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaJornadaPage');
  }
  crearJornada() {
    const jornadas = this.db.list("/liga/" + this.id_liga + "/jornadas");
    jornadas.push(this.jornada);

    this.jornada = {};

  }

    cerrar(){
    this.viewCtrl.dismiss();
  }

}
