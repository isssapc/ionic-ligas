import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams,
    private db: AngularFireDatabase) {

    this.ligas = db.list("/ligas");
    console.log("ligas", this.ligas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LigasPage');
  }

  gotoLiga(liga) {
    this.navCtrl.push("LigaPage", { id_liga: liga.$key });
  }

  gotoNuevaLiga() {
    this.navCtrl.push("NuevaLigaPage");
  }
}
