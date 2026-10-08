import { Component, EventEmitter, Output } from '@angular/core';
import { PageModule } from '../../page/page.module';

@Component({
  selector: 'app-navbar',
  imports: [PageModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() changePage = new EventEmitter<'one' | 'two' | 'three'>();
  mobileOpen = false;

  current: 'one' | 'two' | 'three' = 'one';

  goto(page: 'one' | 'two' | 'three') {
    this.current = page;
    this.changePage.emit(page);
  }
}
