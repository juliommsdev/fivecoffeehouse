import { Component, OnDestroy } from '@angular/core';
import { PageModule } from "../../page.module";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [PageModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showPrivacy = false;
  showTerms = false;

}
