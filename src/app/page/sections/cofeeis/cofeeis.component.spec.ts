import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeisComponent } from './cofeeis.component';

describe('CofeeisComponent', () => {
  let component: CofeeisComponent;
  let fixture: ComponentFixture<CofeeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofeeisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
