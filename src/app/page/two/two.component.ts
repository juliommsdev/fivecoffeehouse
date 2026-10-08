import { Component, EventEmitter, Output } from '@angular/core';
import { PageModule } from '../page.module';
import { IntroComponent } from "../sections/intro/intro.component";
import { CofeeisComponent } from "../sections/cofeeis/cofeeis.component";
import { FoodsComponent } from "../sections/foods/foods.component";

@Component({
  selector: 'app-two',
  imports: [PageModule, IntroComponent, CofeeisComponent, FoodsComponent],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css',
})
export class TwoComponent {

}
