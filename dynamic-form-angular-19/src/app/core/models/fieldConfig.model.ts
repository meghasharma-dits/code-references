import { ValidatorFn } from "@angular/forms";

export interface FieldConfig {
  type: string;
  name: string;
  label?: string;
  value?: any;
  options?: { key: string, value: string }[];
  required: boolean
  children?: FieldConfig[];
}