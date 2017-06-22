import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-liga',
    templateUrl: 'liga.html',
})
export class LigaPage {
    segmento: string = "Jornadas";
    informacion: any[] = [];
    id_liga: string;
    nombre_liga: string;
    jornadas: FirebaseListObservable<any[]>;
    equipos: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        private http: Http,
        private db: AngularFireDatabase) {
        this.id_liga = navParams.data.id_liga;
        this.nombre_liga = navParams.data.nombre_liga;
        console.log("liga", this.id_liga, this.nombre_liga);

        this.jornadas = db.list("/liga/" + this.id_liga + "/jornadas");
        this.equipos = db.list("/liga/" + this.id_liga + "/equipos");


        /* let datos = http.get('assets/data/equipos.json').map(res => res.json().elementos);
         datos.subscribe(data => {
             this.informacion = data;
             console.log("informacion", this.informacion);
         });*/

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
        //console.log("nuevoEquipo = ", this.segmento);
        //this.navCtrl.push("NuevoEquipoPage", { id_liga: this.id_liga });
        let modal = this.modalCtrl.create("NuevoEquipoPage", { id_liga: this.id_liga });
        modal.present();


    }

    nuevaJornada() {
        //console.log("nuevaJornada = ", this.segmento);
        //this.navCtrl.push("NuevaJornadaPage", { id_liga: this.id_liga });
        let modal = this.modalCtrl.create("NuevaJornadaPage", { id_liga: this.id_liga });
        modal.present();
    }

    gotoJornada(jornada) {
        this.navCtrl.push("JornadaPage", {
            id_jornada: jornada.$key,
            nombre_jornada: jornada.nombre,
            equipos: this.equipos
        });
    }

}
