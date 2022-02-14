import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSliderComponent } from './mid-slider.component';

describe('MidSliderComponent', () => {
  let component: MidSliderComponent;
  let fixture: ComponentFixture<MidSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
