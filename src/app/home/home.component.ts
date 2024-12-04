import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  linkPath = window.location.protocol + "//" + window.location.host + window.location.pathname;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    setTimeout(() => {
      this.uxChanges();
    }, 300);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.uxChanges();
    }, 300);
  }

  uxChanges() { }
}
