import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {
  linkPath = window.location.protocol + "//" + window.location.host + window.location.pathname;
  travelPackages = [
    { name: 'Adventure Tours', description: 'Explore breathtaking destinations with our expertly guided adventure tours.', image: this.linkPath + 'assets/adventure-banner-2.jpeg' },
    { name: 'Beach Paradise', description: 'Relax and unwind at the most beautiful beaches around the globe.', image: this.linkPath + 'assets/beach-banner-1.jpg' },
    { name: 'City Breaks', description: 'Discover the culture, history, and excitement of major cities worldwide.', image: this.linkPath + 'assets/city-banner-1.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
