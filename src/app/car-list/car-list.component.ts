import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {

  showCarDetails = false;
  linkPath = window.location.protocol + "//" + window.location.host + window.location.pathname;
  carList = [
    { image: this.linkPath + 'assets/car-1.jpg' },
    { image: this.linkPath + 'assets/car-2.jpg' },
    { image: this.linkPath + 'assets/car-3.jpg' },
    { image: this.linkPath + 'assets/car-4.jpg' },
    { image: this.linkPath + 'assets/car-5.jpg' },
    { image: this.linkPath + 'assets/car-6.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onHoverCar() {
    this.showCarDetails = true;
    setTimeout(() => {
      let carDtlSec = (document.getElementById('car-details-section') as HTMLElement);
      window.scrollTo(0, carDtlSec.offsetTop);
    }, 300);
  }
}
