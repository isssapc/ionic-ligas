import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-nueva-liga',
  templateUrl: 'nueva-liga.html',
})
export class NuevaLigaPage {

  liga: any={};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform:Platform,
    public viewCtrl:ViewController,
    private db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaLigaPage');
  }

  crearLiga() {
    const ligas = this.db.list("/ligas");
    ligas.push(this.liga);
    
    this.liga={};
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
