import { NgModule } from '@angular/core';
import { CanvasDrawComponent } from './canvas-draw/canvas-draw';
import { SmileRateComponent } from './smile-rate/smile-rate';
@NgModule({
	declarations: [CanvasDrawComponent,
    SmileRateComponent],
	imports: [],
	exports: [CanvasDrawComponent,
    SmileRateComponent]
})
export class ComponentsModule {}
