import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() config!: any;

  @Output() onSubmit = new EventEmitter<any>;

  displayedColumns: string[] = ['title', 'author', 'genre', 'action'];

  handleClickEvent(element: any){
    this.onSubmit.emit(element)
  }

}
