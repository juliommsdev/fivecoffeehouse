import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcoffeeComponent } from './ourcoffee.component';

describe('OurcoffeeComponent', () => {
  let component: OurcoffeeComponent;
  let fixture: ComponentFixture<OurcoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurcoffeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
