import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-nueva-liga',
  templateUrl: 'nueva-liga.html',
})
export class NuevaLigaPage {

  liga: any={
    
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
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

}
