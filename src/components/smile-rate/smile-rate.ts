import { Component } from '@angular/core';

/**
 * Generated class for the SmileRateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'smile-rate',
  templateUrl: 'smile-rate.html'
})
export class SmileRateComponent {

  text: string;

  constructor() {
    console.log('Hello SmileRateComponent Component');
    this.text = 'Hello World';
  }

}
