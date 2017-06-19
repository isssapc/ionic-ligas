import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LigasPage } from './ligas';

@NgModule({
  declarations: [
    LigasPage,
  ],
  imports: [
    IonicPageModule.forChild(LigasPage),
  ],
  exports: [
    LigasPage
  ]
})
export class LigasPageModule {}
