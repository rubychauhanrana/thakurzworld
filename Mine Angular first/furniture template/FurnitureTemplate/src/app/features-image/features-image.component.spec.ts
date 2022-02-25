import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesImageComponent } from './features-image.component';

describe('FeaturesImageComponent', () => {
  let component: FeaturesImageComponent;
  let fixture: ComponentFixture<FeaturesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
