import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldDirective } from '../../shared/directives/dynamicField.directive';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-array-controls',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldDirective, ButtonComponent],
  templateUrl: './form-array-controls.component.html',
  styleUrls: ['./form-array-controls.component.scss'],
})
export class FormArrayControlsComponent {
  @Input() config!: any;
  @Input() group!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get array(): FormArray {
    return this.group.get(this.config.name) as FormArray;
  }

  add() {
    const group = this.fb.group({});
    this.config.children!.forEach((child: any) => {
      group.addControl(child.name, this.fb.control(child.value || ''));
    });
    this.array.push(group);
  }

  remove(index: number) {
    this.array.removeAt(index);
  }

}
