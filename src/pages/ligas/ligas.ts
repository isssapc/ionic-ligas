import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LigasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ligas',
  templateUrl: 'ligas.html',
})
export class LigasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LigasPage');
  }

  gotoLiga() {
      this.navCtrl.push("LigaPage");
  }

  gotoNuevaLiga(){
    this.navCtrl.push("NuevaLigaPage");
  }
}
