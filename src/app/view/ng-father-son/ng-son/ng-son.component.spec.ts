import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSonComponent } from './ng-son.component';

describe('NgSonComponent', () => {
  let component: NgSonComponent;
  let fixture: ComponentFixture<NgSonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSonComponent]
    });
    fixture = TestBed.createComponent(NgSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
