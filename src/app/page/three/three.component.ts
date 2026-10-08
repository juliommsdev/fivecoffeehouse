import { Component, EventEmitter, Output } from '@angular/core';
import { PageModule } from '../page.module';
import { EnvironmentComponent } from "../sections/environment/environment.component";
import { OurcoffeeComponent } from "../sections/ourcoffee/ourcoffee.component";
import { ServiceComponent } from "../sections/service/service.component";
import { SustainabilityComponent } from "../sections/sustainability/sustainability.component";
import { FeedbackComponent } from "../sections/feedback/feedback.component";

@Component({
  selector: 'app-three',
  imports: [PageModule, EnvironmentComponent, OurcoffeeComponent, ServiceComponent, SustainabilityComponent, FeedbackComponent],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {

}
