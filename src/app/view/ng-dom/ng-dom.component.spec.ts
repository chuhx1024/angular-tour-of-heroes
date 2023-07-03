import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDomComponent } from './ng-dom.component';

describe('NgDomComponent', () => {
  let component: NgDomComponent;
  let fixture: ComponentFixture<NgDomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgDomComponent]
    });
    fixture = TestBed.createComponent(NgDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
