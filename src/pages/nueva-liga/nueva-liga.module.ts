import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaLigaPage } from './nueva-liga';

@NgModule({
  declarations: [
    NuevaLigaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaLigaPage),
  ],
  exports: [
    NuevaLigaPage
  ]
})
export class NuevaLigaPageModule {}
