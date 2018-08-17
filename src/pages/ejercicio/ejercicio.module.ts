import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjercicioPage } from './ejercicio';

@NgModule({
  declarations: [
    EjercicioPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(EjercicioPage),
  ],
})
export class EjercicioPageModule {}
