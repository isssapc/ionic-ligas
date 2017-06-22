import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { EquipoPage } from '../pages/equipo/equipo';
import { EquiposPage } from '../pages/equipos/equipos';
import { PartidoPage } from '../pages/partido/partido';
import { JugadorPage } from '../pages/jugador/jugador';
import { NuevoEquipoPage } from '../pages/nuevo-equipo/nuevo-equipo';
import { NuevoJugadorPage } from '../pages/nuevo-jugador/nuevo-jugador';
import { NuevaJornadaPage } from '../pages/nueva-jornada/nueva-jornada';
import { NuevoPartidoPage } from '../pages/nuevo-partido/nuevo-partido';
import { NuevaLigaPage } from '../pages/nueva-liga/nueva-liga';
import { LigaPage } from '../pages/liga/liga';
import { LigasPage } from '../pages/ligas/ligas';
import { JornadaPage } from '../pages/jornada/jornada';
import { ActaArbitralPage } from '../pages/acta-arbitral/acta-arbitral';
import { PruebaPage } from '../pages/prueba/prueba';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { AngularFireDatabaseModule } from "angularfire2/database";


@NgModule({
    declarations: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage,
        EquipoPage,
        EquiposPage,
        PartidoPage,
        JugadorPage,
        NuevoEquipoPage,
        NuevoJugadorPage,
        NuevaJornadaPage,
        NuevoPartidoPage,
        NuevaLigaPage,
        LigaPage,
        LigasPage,
        JornadaPage,
        ActaArbitralPage,
        PruebaPage



    ],
    imports: [
        BrowserModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        IonicModule.forRoot(ConferenceApp, {}, {
            links: [
                { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
                { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
                { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
                { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
                { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
                { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
                { component: MapPage, name: 'Map', segment: 'map' },
                { component: AboutPage, name: 'About', segment: 'about' },
                { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                { component: SupportPage, name: 'SupportPage', segment: 'support' },
                { component: LoginPage, name: 'LoginPage', segment: 'login' },
                { component: AccountPage, name: 'AccountPage', segment: 'account' },
                { component: SignupPage, name: 'SignupPage', segment: 'signup' },
                { component: EquipoPage, name: 'EquipoPage', segment: 'equipo' },
                { component: EquiposPage, name: 'EquiposPage', segment: 'equipos' },
                { component: PartidoPage, name: 'PartidoPage', segment: 'partido' },
                { component: JugadorPage, name: 'JugadorPage', segment: 'jugador' },
                { component: NuevoEquipoPage, name: 'NuevoEquipoPage', segment: 'nuevo-equipo' },
                { component: NuevoJugadorPage, name: 'NuevoJugadorPage', segment: 'nuevo-jugador' },
                { component: NuevaJornadaPage, name: 'NuevaJornadaPage', segment: 'nueva-jornada' },
                { component: NuevoPartidoPage, name: 'NuevoPartidoPage', segment: 'nuevo-partido' },
                { component: NuevaLigaPage, name: 'NuevaLigaPage', segment: 'nueva-liga' },
                { component: LigaPage, name: 'LigaPage', segment: 'liga' },
                { component: LigasPage, name: 'LigasPage', segment: 'ligas' },
                { component: JornadaPage, name: 'JornadaPage', segment: 'jornada' },
                { component: ActaArbitralPage, name: 'ActaArbitralPage', segment: 'acta-arbitral' },
                { component: PruebaPage, name: 'PruebaPage', segment: 'prueba' },

            ]
        }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage,
        EquipoPage,
        EquiposPage,
        PartidoPage,
        JugadorPage,
        NuevoEquipoPage,
        NuevoJugadorPage,
        NuevaJornadaPage,
        NuevoPartidoPage,
        NuevaLigaPage,
        LigaPage,
        LigasPage,
        JornadaPage,
        ActaArbitralPage,
        PruebaPage


    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConferenceData,
        UserData,
        InAppBrowser,
        SplashScreen,
        Camera
    ]
})
export class AppModule { }
