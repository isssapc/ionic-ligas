import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquiposPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-equipos',
    templateUrl: 'equipos.html',
})
export class EquiposPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EquiposPage');
    }

    gotoEquipo() {
        this.navCtrl.push('EquipoPage');
    }

    gotoNuevoEquipo() {
        this.navCtrl.push('NuevoEquipoPage');
    }

}
