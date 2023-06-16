import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventComponent } from './ng-event.component';

describe('NgEventComponent', () => {
  let component: NgEventComponent;
  let fixture: ComponentFixture<NgEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgEventComponent]
    });
    fixture = TestBed.createComponent(NgEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
