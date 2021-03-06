import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { EjercicioPage } from '../pages/ejercicio/ejercicio';
import { LoginPage } from '../pages/login/login';
import { Health } from '@ionic-native/health';
import { Toast } from '@ionic-native/toast';

import { EjercicioService } from '../services/ejercicio.service';
import { AuthService } from '../services/auth.service';
import { ChartsModule } from 'ng2-charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    EjerciciosPage,
    LoginPage,
    EjercicioPage,
    TabsPage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    EjerciciosPage,
    EjercicioPage,  
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    Health,
    Toast,
    Vibration,
    AuthService,
    EjercicioService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
