import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadorPage } from './jugador';

@NgModule({
  declarations: [
    JugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadorPage),
  ],
  exports: [
    JugadorPage
  ]
})
export class JugadorPageModule {}
