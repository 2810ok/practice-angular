import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomEncapComponent } from './shadow-dom-encap.component';

describe('ShadowDomEncapComponent', () => {
  let component: ShadowDomEncapComponent;
  let fixture: ComponentFixture<ShadowDomEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowDomEncapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowDomEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
