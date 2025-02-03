import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncapComponent } from './no-encap.component';

describe('NoEncapComponent', () => {
  let component: NoEncapComponent;
  let fixture: ComponentFixture<NoEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoEncapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
