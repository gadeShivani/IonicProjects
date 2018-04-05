import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the PassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass',
  templateUrl: 'pass.html',
})
export class PassPage {
  color: string;
  name: string;
  age: number;
  degree: string;
  HomePage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     // console.log(navParams.data.age);
     this.color = navParams.get('color');
     this.name = navParams.get('name');
     this.age = navParams.get('age');
     this.degree = navParams.get('degree');
     this.HomePage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassPage');
  }

}
