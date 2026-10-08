import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { PageModule } from '../page.module';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { AboutComponent } from "../sections/about/about.component";
import { MissionComponent } from "../sections/mission/mission.component";

@Component({
  selector: 'app-one',
  imports: [
    PageModule,
    HeroComponent,
    AboutComponent,
    MissionComponent
],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css',
})
export class OneComponent {

}
