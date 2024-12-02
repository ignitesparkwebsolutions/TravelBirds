import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showClass = '';

  toggle() {
    this.showClass = (this.showClass == '') ? 'show' : '';
  }
}