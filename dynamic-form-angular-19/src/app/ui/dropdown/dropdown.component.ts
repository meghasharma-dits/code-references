import { Component, Input } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FieldConfig } from '../../core/models/fieldConfig.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  standalone: true
})
export class DropdownComponent {
  @Input() config!: FieldConfig;
  @Input() group!: any;

}
