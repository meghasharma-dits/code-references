import { Component, inject, Input } from '@angular/core';
import { FieldConfig } from '../../core/models/fieldConfig.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldDirective } from '../directives/dynamicField.directive';
import { FormArrayControlsComponent } from '../../ui/form-array-controls/form-array-controls.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule, FieldDirective, FormArrayControlsComponent, ButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() fields: FieldConfig[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
    this.form = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'array') {
        this.form.addControl(field.name, this.fb.array([]));
      } else {
        this.form.addControl(field.name, this.fb.control(field.value || ''));
      }
    });
  }

  onSubmit(event: any) {
    console.log(this.form.value);
  }
}
