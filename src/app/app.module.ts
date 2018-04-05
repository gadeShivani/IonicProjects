import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { PassPage } from '../pages/pass/pass';
import {CanvasPage} from '../pages/canvas/canvas';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { CanvasDrawComponent } from '../components/canvas-draw/canvas-draw';
import { MyProvider } from '../providers/my/my';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PassPage,
    CanvasPage,
    CanvasDrawComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PassPage,
    CanvasPage,
    CanvasDrawComponent
  ],
  providers: [
    StatusBar,
    SplashScreen ,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeviceMotion,
    MyProvider
  ]
})
export class AppModule {}
