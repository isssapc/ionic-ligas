import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActaArbitralPage } from './acta-arbitral';

@NgModule({
  declarations: [
    ActaArbitralPage,
  ],
  imports: [
    IonicPageModule.forChild(ActaArbitralPage),
  ],
  exports: [
    ActaArbitralPage
  ]
})
export class ActaArbitralPageModule {}
