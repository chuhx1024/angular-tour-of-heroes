import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCostomFormComponent } from './ng-costom-form.component';

describe('NgCostomFormComponent', () => {
  let component: NgCostomFormComponent;
  let fixture: ComponentFixture<NgCostomFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgCostomFormComponent]
    });
    fixture = TestBed.createComponent(NgCostomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
