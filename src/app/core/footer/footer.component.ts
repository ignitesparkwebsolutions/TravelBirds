import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
  currentYear: any;

}
