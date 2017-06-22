import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-liga',
    templateUrl: 'liga.html',
})
export class LigaPage {
    segmento: string = "Equipos";
    informacion: any[] = [];
    id_liga: string;
    jornadas: FirebaseListObservable<any[]>;
    equipos: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http,
        private db: AngularFireDatabase) {
        this.id_liga = navParams.data.id_liga;
        console.log("id_liga", this.id_liga);

        this.jornadas = db.list("/ligas/" + this.id_liga + "/jornadas");
        this.equipos = db.list("/ligas/" + this.id_liga + "/equipos");


        let datos = http.get('assets/data/equipos.json').map(res => res.json().elementos);
        datos.subscribe(data => {
            this.informacion = data;
            console.log("informacion", this.informacion);
        });

    }

    toggleSection(i) {
        this.informacion[i].open = !this.informacion[i].open;
    }

    toggleItem(i, j) {
        this.informacion[i].equipos[j].open = !this.informacion[i].equipos[j].open
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LigaPage');
    }

    gotoEquipo(equipo) {
        console.log("gotoEquipo", this.id_liga, equipo.$key);
        this.navCtrl.push("EquipoPage", { id_liga: this.id_liga, id_equipo: equipo.$key });
    }

    nuevoEquipo() {
        console.log("nuevoEquipo = ", this.segmento);
        this.navCtrl.push("NuevoEquipoPage", { id_liga: this.id_liga });


    }

    nuevaJornada() {
        console.log("nuevaJornada = ", this.segmento);
        this.navCtrl.push("NuevaJornadaPage", { id_liga: this.id_liga });
    }

    gotoJornada(jornada) {
        this.navCtrl.push("JornadaPage", { id_jornada: jornada.$key });
    }

}
