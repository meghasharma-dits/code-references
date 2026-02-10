import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';
import { MatCardModule } from '@angular/material/card';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form-component',
  imports: [CommonModule, RouterModule, DynamicFormComponent, MatCardModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
  fieldConfiguration: [] = [];
  
  constructor(public formService: FormService) {}
  
  ngOnInit(){
      this.bindFormFields();
    }

  bindFormFields(){
    this.formService.getFieldConfiguration().subscribe((res: any) => {
      this.fieldConfiguration = res.fieldConfig;
    })
  }

}
