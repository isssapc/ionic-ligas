import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoPartidoPage } from './nuevo-partido';

@NgModule({
  declarations: [
    NuevoPartidoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoPartidoPage),
  ],
  exports: [
    NuevoPartidoPage
  ]
})
export class NuevoPartidoPageModule {}
