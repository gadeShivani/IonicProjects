import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
/**
 * Generated class for the CanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDrawComponent {
@ViewChild('myCanvas') canvas:any;
canvasElement:any;
x_axis:number;
y_axis:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private deviceMotion: DeviceMotion, public platform:Platform, public renderer: Renderer) {
  }
  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width()+ '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height()+'');
    let ctx = this.canvasElement.getContext('2d');
    ctx.lineWidth=2;
    this.x_axis = -50;
    this.y_axis = 20;
    for (var i=0;i<300;i++){
      ctx.beginPath();
      ctx.moveTo(this.x_axis,0);

      ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 0, this.x_axis + 45, this.y_axis + 0, this.x_axis + 0, this.y_axis + 25);
      ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 25, this.x_axis - 50, this.y_axis + 42, this.x_axis + 0, this.y_axis + 60);
      ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 60, this.x_axis + 50, this.y_axis + 75, this.x_axis + 0, this.y_axis + 90);
      ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 90, this.x_axis - 40, this.y_axis + 105, this.x_axis + 0, this.y_axis + 115);
      ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 115, this.x_axis + 67, this.y_axis + 132, this.x_axis + 10, this.y_axis + 135);
      ctx.bezierCurveTo(this.x_axis + 10, this.y_axis + 135, this.x_axis - 47, this.y_axis + 145, this.x_axis + 20, this.y_axis + 155);
      ctx.bezierCurveTo(this.x_axis + 20, this.y_axis + 155, this.x_axis + 67, this.y_axis + 165, this.x_axis + 20, this.y_axis + 175);
      ctx.bezierCurveTo(this.x_axis + 30, this.y_axis + 175, this.x_axis - 47, this.y_axis + 185, this.x_axis + 20, this.y_axis + 195);
      ctx.bezierCurveTo(this.x_axis + 40, this.y_axis + 195, this.x_axis + 67, this.y_axis + 205, this.x_axis + 20, this.y_axis + 215);

      ctx.bezierCurveTo(this.x_axis + 50, this.y_axis + 215, this.x_axis - 87, this.y_axis + 225, this.x_axis + 30, this.y_axis + 235);
      ctx.bezierCurveTo(this.x_axis + 60, this.y_axis + 235, this.x_axis + 107, this.y_axis + 245, this.x_axis + 30, this.y_axis + 255);
      ctx.bezierCurveTo(this.x_axis + 70, this.y_axis + 255, this.x_axis - 127, this.y_axis + 265, this.x_axis + 40, this.y_axis + 275);
      ctx.bezierCurveTo(this.x_axis + 80, this.y_axis + 275, this.x_axis + 147, this.y_axis + 285, this.x_axis + 40, this.y_axis + 295);
      ctx.stroke();
      this.x_axis += 10;
    }
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
      (error: any) => console.log(error)
    );
    // Watch device acceleration
  this.deviceMotion.watchAcceleration({frequency:1000}).subscribe((acceleration: DeviceMotionAccelerationData) => {
  console.log(acceleration);
  this.x_axis= acceleration.x * 13;
   this.y_axis = (Math.floor(Math.random() * acceleration.y) + 12);
   ctx.clearRect(0,0,this.platform.width(),this.platform.height());
   for (var i=0;i<300;i++){
     ctx.beginPath();
     ctx.moveTo(this.x_axis,0);

     ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 0, this.x_axis + 45, this.y_axis + 0, this.x_axis + 0, this.y_axis + 25);
     ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 25, this.x_axis - 50, this.y_axis + 42, this.x_axis + 0, this.y_axis + 60);
     ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 60, this.x_axis + 50, this.y_axis + 75, this.x_axis + 0, this.y_axis + 90);
     ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 90, this.x_axis - 40, this.y_axis + 105, this.x_axis + 0, this.y_axis + 115);
     ctx.bezierCurveTo(this.x_axis + 0, this.y_axis + 115, this.x_axis + 67, this.y_axis + 132, this.x_axis + 10, this.y_axis + 135);
     ctx.bezierCurveTo(this.x_axis + 10, this.y_axis + 135, this.x_axis - 47, this.y_axis + 145, this.x_axis + 20, this.y_axis + 155);
     ctx.bezierCurveTo(this.x_axis + 20, this.y_axis + 155, this.x_axis + 67, this.y_axis + 165, this.x_axis + 20, this.y_axis + 175);
     ctx.bezierCurveTo(this.x_axis + 30, this.y_axis + 175, this.x_axis - 47, this.y_axis + 185, this.x_axis + 20, this.y_axis + 195);
     ctx.bezierCurveTo(this.x_axis + 40, this.y_axis + 195, this.x_axis + 67, this.y_axis + 205, this.x_axis + 20, this.y_axis + 215);

     ctx.bezierCurveTo(this.x_axis + 50, this.y_axis + 215, this.x_axis - 87, this.y_axis + 225, this.x_axis + 30, this.y_axis + 235);
     ctx.bezierCurveTo(this.x_axis + 60, this.y_axis + 235, this.x_axis + 107, this.y_axis + 245, this.x_axis + 30, this.y_axis + 255);
     ctx.bezierCurveTo(this.x_axis + 70, this.y_axis + 255, this.x_axis - 127, this.y_axis + 265, this.x_axis + 40, this.y_axis + 275);
     ctx.bezierCurveTo(this.x_axis + 80, this.y_axis + 275, this.x_axis + 147, this.y_axis + 285, this.x_axis + 40, this.y_axis + 295);
     ctx.stroke();
     this.x_axis += 10;
   }

    });
  }


}
