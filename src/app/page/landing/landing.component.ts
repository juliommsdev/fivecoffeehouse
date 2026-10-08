import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { DialogModule } from 'primeng/dialog';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../sections/footer/footer.component';
import { PageModule } from '../page.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    PageModule,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FooterComponent,
    NavbarComponent,
],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  page: 'one' | 'two' | 'three'  = 'one';

  setPage(newPage: 'one' | 'two' | 'three' ) {
    this.page = newPage;
  }

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // ✅ Meta tags e título (seguro para SSR)
    this.title.setTitle(`${environment.siteName} | ${environment.siteSlogan}`);
    this.meta.updateTag({
      name: 'description',
      content: environment.seo.description,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: environment.seo.keywords,
    });
    this.meta.updateTag({
      name: 'author',
      content: environment.seo.author,
    });

    // ✅ Este trecho só roda no navegador
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
      });
    }
  }
}
