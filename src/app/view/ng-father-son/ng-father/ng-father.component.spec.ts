import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFatherComponent } from './ng-father.component';

describe('NgFatherComponent', () => {
  let component: NgFatherComponent;
  let fixture: ComponentFixture<NgFatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgFatherComponent]
    });
    fixture = TestBed.createComponent(NgFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
