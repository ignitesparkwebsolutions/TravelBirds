import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  travelPackages = [
    { name: 'Adventure Tours', description: 'Explore breathtaking destinations with our expertly guided adventure tours.', image: '../../assets/adventure-banner-2.jpeg' },
    { name: 'Beach Paradise', description: 'Relax and unwind at the most beautiful beaches around the globe.', image: '../../assets/beach-banner-1.jpg' },
    { name: 'City Breaks', description: 'Discover the culture, history, and excitement of major cities worldwide.', image: '../../assets/city-banner-1.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
