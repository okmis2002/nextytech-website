import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSocialMediaComponent } from './fixed-social-media.component';

describe('FixedSocialMediaComponent', () => {
  let component: FixedSocialMediaComponent;
  let fixture: ComponentFixture<FixedSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedSocialMediaComponent]
    });
    fixture = TestBed.createComponent(FixedSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
