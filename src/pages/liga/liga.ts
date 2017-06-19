import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LigaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-liga',
  templateUrl: 'liga.html',
})
export class LigaPage {
    segmento: string = "Equipos";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LigaPage');
  }

  gotoEquipo() {
      this.navCtrl.push("EquipoPage");
  }

  nuevoEquipo() {
      console.log("nuevoEquipo = ", this.segmento);
      this.navCtrl.push("NuevoEquipoPage");


  }

  nuevaJornada() {
      console.log("nuevaJornada = ", this.segmento);
      this.navCtrl.push("NuevaJornadaPage");
  }

  gotoJornada(){
      this.navCtrl.push("JornadaPage");
  }

}
