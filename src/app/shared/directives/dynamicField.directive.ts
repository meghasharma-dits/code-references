import {
  Directive, Input, ViewContainerRef, ComponentRef,
  EnvironmentInjector, OnInit, Type
} from '@angular/core';
import { FieldConfig } from '../../core/models/fieldConfig.model';
import { InputTextComponent } from '../../ui/input-text/input-text.component';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';

const components: { [type: string]: any } = {
  text: InputTextComponent,
  email: InputTextComponent,
  select: DropdownComponent,
};

@Directive({
  selector: '[appDynamicField]',
  standalone: true,
})
export class FieldDirective implements OnInit {
  @Input() config!: FieldConfig;
  @Input() group: any;

  constructor(
    private vcr: ViewContainerRef,
    private environmentInjector: EnvironmentInjector
  ) {}

  ngOnInit() {
    const component = components[this.config.type];

    if (!component || !component?.ɵcmp) {
      console.error(`Invalid or missing component for type "${this.config.type}"`, component);
      return;
    }

    const componentRef: ComponentRef<any> = this.vcr.createComponent(component, {
      environmentInjector: this.environmentInjector,
    });

    componentRef.setInput('config', this.config);
    componentRef.setInput('group', this.group);
  }
}
