import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquiposPage } from './equipos';

@NgModule({
  declarations: [
    EquiposPage,
  ],
  imports: [
    IonicPageModule.forChild(EquiposPage),
  ],
  exports: [
    EquiposPage
  ]
})
export class EquiposPageModule {}
