import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLayoutComponent } from './slider-layout.component';

describe('SliderLayoutComponent', () => {
  let component: SliderLayoutComponent;
  let fixture: ComponentFixture<SliderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
