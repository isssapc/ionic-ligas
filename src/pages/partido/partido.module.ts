import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidoPage } from './partido';

@NgModule({
  declarations: [
    PartidoPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidoPage),
  ],
  exports: [
    PartidoPage
  ]
})
export class PartidoPageModule {}
