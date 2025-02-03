import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedEncapComponent } from './emulated-encap.component';

describe('EmulatedEncapComponent', () => {
  let component: EmulatedEncapComponent;
  let fixture: ComponentFixture<EmulatedEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedEncapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmulatedEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
