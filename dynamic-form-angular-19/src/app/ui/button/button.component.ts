import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter();

  onButtonClick(event:any) {
    this.buttonClick.emit(event);
  }

}
