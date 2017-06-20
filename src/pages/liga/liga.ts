import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-liga',
    templateUrl: 'liga.html',
})
export class LigaPage {
    segmento: string = "Equipos";
    informacion: any[]=[];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private http: Http) {

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

    gotoJornada() {
        this.navCtrl.push("JornadaPage");
    }

}
