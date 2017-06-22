import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-ligas',
  templateUrl: 'ligas.html',
})
export class LigasPage {
  ligas: FirebaseListObservable<any[]>;
  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController,
    public navParams: NavParams,
    private db: AngularFireDatabase) {

    this.ligas = db.list("/ligas");
    console.log("ligas", this.ligas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LigasPage');
  }

  gotoLiga(liga) {
    this.navCtrl.push("LigaPage", { id_liga: liga.$key, nombre_liga: liga.nombre });
  }

  gotoNuevaLiga() {
    //this.navCtrl.push("NuevaLigaPage");

    let modal=this.modalCtrl.create("NuevaLigaPage");
    modal.present();
  }
}
