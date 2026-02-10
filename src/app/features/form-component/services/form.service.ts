import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  
    getFieldConfiguration(){
      return of(
        {
    "fieldConfig": [
      {
        "type": "text",
        "name": "firstName",
        "label": "First Name",
        "value": "",
        "required": true
        
      },
      {
        "type": "text",
        "name": "lastName",
        "label": "Last Name",
        "value": "",
        "required": true
      },
      {
        "type": "email",
        "name": "email",
        "label": "Email",
        "value": "",
        "required": true
      },
      {
        "type": "select",
        "name": "gender",
        "label": "Gender",
        "options": [
          { "key": "male", "value": "Male" },
          { "key": "female", "value": "Female" }
        ]
      },
      {
        "type": "array",
        "name": "qualification",
        "label": "Qualification",
        
        "children": [
          {
            "type": "text",
            "name": "educationQualification",
            "label": "Education Qualification",
            "value": ""
          },
          {
            "type": "text",
            "name": "yearOfPassing",
            "label": "Year of Passing",
            "value": ""
          }
        ]
      }
    ]
  }
      )
  
    }
  }