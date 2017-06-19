import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-equipo',
    templateUrl: 'equipo.html',
})
export class EquipoPage {
    segmento: string = "Club";

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EquipoPage');
    }

    gotoJugador() {
        this.navCtrl.push("JugadorPage");
    }

    gotoNuevoJugador() {
        this.navCtrl.push("NuevoJugadorPage");
    }

     gotoNuevoPartido(){
        this.navCtrl.push("NuevoPartidoPage");
    }

   

}
