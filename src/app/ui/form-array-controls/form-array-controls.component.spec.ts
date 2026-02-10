import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayControlsComponent } from './form-array-controls.component';

describe('FormArrayControlsComponent', () => {
  let component: FormArrayControlsComponent;
  let fixture: ComponentFixture<FormArrayControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
