import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBindComponent } from './ng-bind.component';

describe('NgBindComponent', () => {
  let component: NgBindComponent;
  let fixture: ComponentFixture<NgBindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgBindComponent]
    });
    fixture = TestBed.createComponent(NgBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
