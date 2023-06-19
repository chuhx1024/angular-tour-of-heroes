import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPipeComponent } from './ng-pipe.component';

describe('NgPipeComponent', () => {
  let component: NgPipeComponent;
  let fixture: ComponentFixture<NgPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgPipeComponent]
    });
    fixture = TestBed.createComponent(NgPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
