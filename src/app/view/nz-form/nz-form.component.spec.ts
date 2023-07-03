import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFormComponent } from './nz-form.component';

describe('NzFormComponent', () => {
  let component: NzFormComponent;
  let fixture: ComponentFixture<NzFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NzFormComponent]
    });
    fixture = TestBed.createComponent(NzFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
