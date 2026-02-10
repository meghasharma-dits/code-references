import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})


export class DynamicFormBuilderService {
  constructor(private fb: FormBuilder) { }

  buildForm(configs: any[]): FormGroup {
    const group: any = {};

    configs.forEach(config => {
      switch (config.type) {
        case 'control':
          group[config.name] = new FormControl(config.value, config.validators || []);
          break;
        case 'group':
          group[config.name] = this.buildForm(config.children || []);
          break;
        case 'array':
          group[config.name] = this.fb.array(
            (config.children || []).map((child: any) =>
              this.buildControlFromConfig(child)
            )
          );
          break;
      }
    });

    return this.fb.group(group);
  }

  buildControlFromConfig(config: any): FormControl | FormGroup | FormArray {
  if (config.type === 'control') {
    return new FormControl(config.value, config.validators || []);
  } else if (config.type === 'group') {
    return this.buildForm(config.children || []);  // This builds nested FormGroup
  } else if (config.type === 'array') {
    // Check if children exists and map each child config to a FormControl
    const controls = (config.children || []).map((childConfig: any) => this.buildControlFromConfig(childConfig));
    return this.fb.array(controls);  // Return FormArray with FormControls or FormGroups
  } else {
    return new FormControl(null);  // Default fallback (in case config is invalid)
  }
}
}
