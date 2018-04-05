import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {canvas-draw} from '../components/canvas-draw';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';


/**
 * Generated class for the CanvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})
export class CanvasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanvasPage');
  }

}
