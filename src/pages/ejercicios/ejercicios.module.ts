import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjerciciosPage } from './ejercicios';

@NgModule({
  declarations: [
    EjerciciosPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(EjerciciosPage),
  ],
})
export class EjerciciosPageModule {}
