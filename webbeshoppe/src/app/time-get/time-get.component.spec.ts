import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGetComponent } from './time-get.component';

describe('TimeGetComponent', () => {
  let component: TimeGetComponent;
  let fixture: ComponentFixture<TimeGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
