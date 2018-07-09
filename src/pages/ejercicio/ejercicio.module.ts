import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjercicioPage } from './ejercicio';

@NgModule({
  declarations: [
    EjercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(EjercicioPage),
  ],
})
export class EjercicioPageModule {}
