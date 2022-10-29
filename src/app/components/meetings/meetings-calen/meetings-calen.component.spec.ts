import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsCalenComponent } from './meetings-calen.component';

describe('MeetingsCalenComponent', () => {
  let component: MeetingsCalenComponent;
  let fixture: ComponentFixture<MeetingsCalenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsCalenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsCalenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
