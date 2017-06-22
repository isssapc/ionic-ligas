import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@IonicPage()
@Component({
    selector: 'page-equipo',
    templateUrl: 'equipo.html',
})
export class EquipoPage {
    segmento: string = "Club";
    id_liga: string;
    id_equipo: string;
    jugadores: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private db: AngularFireDatabase) {
        this.id_liga = navParams.data.id_liga;
        this.id_equipo = navParams.data.id_equipo;
        console.log("id_liga " + this.id_liga + " id_equipo " + this.id_equipo);
        this.jugadores = db.list("/ligas/" + this.id_liga + "/equipos/" + this.id_equipo + "/jugadores")
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EquipoPage');
    }

    gotoJugador() {
        this.navCtrl.push("JugadorPage");
    }

    gotoNuevoJugador() {

        this.navCtrl.push("NuevoJugadorPage", { id_liga: this.id_liga, id_equipo: this.id_equipo });
    }

    gotoNuevoPartido() {
        this.navCtrl.push("NuevoPartidoPage");
    }



}
