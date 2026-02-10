import { Component } from '@angular/core';
import { StorageKeys } from '../../../../core/enums/storage-keys.enum';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  username: string = sessionStorage.getItem(StorageKeys.user) ?? '';
}
