import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {

  showCarDetails = false;
  selectedCar: any;
  linkPath = window.location.protocol + "//" + window.location.host + window.location.pathname;
  carList = [
    { image: this.linkPath + 'assets/car-1.jpg', id: '1', mrp: '6892', offerPrice: '6202.4', discountRate: '10', category: 'HATCHBACK (AC)', title: 'Swift, WagonR or Similar', perKmRate: '11.2', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' },
    { image: this.linkPath + 'assets/car-2.jpg', id: '2', mrp: '7010', offerPrice: '6307.8', discountRate: '10', category: 'SEDAN (AC)', title: 'Dzire, Etios or Similar', perKmRate: '11.4', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' },
    { image: this.linkPath + 'assets/car-3.jpg', id: '3', mrp: '10915', offerPrice: '8732', discountRate: '20', category: 'SUV (AC)', title: 'Innova, Ertiga, Marazzo or Similar', perKmRate: '16.0', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' },
    { image: this.linkPath + 'assets/car-4.jpg', id: '4', mrp: '11603', offerPrice: '10210.3', discountRate: '12', category: 'Innova (AC)', title: 'Assured Innova', perKmRate: '18.9', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' },
    { image: this.linkPath + 'assets/car-5.jpg', id: '5', mrp: '12082', offerPrice: '10631.9', discountRate: '12', category: 'Innova Crysta (AC)', title: 'Assured Innova Crysta', perKmRate: '19.7', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' },
    { image: this.linkPath + 'assets/car-6.jpg', id: '6', mrp: '16014', offerPrice: '14412.8', discountRate: '10', category: 'TEMPO-12 (AC)', title: '12 Seater Traveller', perKmRate: '26.4', includedKm: '(Itinerary Based)', fuelCharges: 'Included', nightCharges: 'Included', driverCharges: 'Included' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onHoverCar(carId: any) {
    this.showCarDetails = true;
    this.selectedCar = this.carList.find(car => car.id === carId);
    setTimeout(() => {
      if (window.innerWidth < 768) {
        let carDtlSec = (document.getElementById('car-details-section') as HTMLElement);
        window.scrollTo(0, carDtlSec.offsetTop);
      }
    }, 300);
  }

  closeSection() {
    this.showCarDetails = false;
  }
}
