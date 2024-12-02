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

  uxChanges() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    let carouselDivs = document.querySelectorAll('.carousel-images div');
    carouselDivs.forEach((item) => {
      (item as HTMLElement).style.height = (screenWidth * 0.8) + 'px';
      (item as HTMLElement).style.width = screenWidth + 'px';
      (item as HTMLElement).style.maxHeight = '350px';
    });

    document.querySelectorAll('.carousel-images div img').forEach(item => {
      (item as HTMLElement).style.height = (screenWidth * 0.8) + 'px';
      (item as HTMLElement).style.maxHeight = '350px';
      const elemWidth = (item as HTMLElement).offsetWidth;
      if (screenWidth < elemWidth) {
        (item as HTMLElement).style.width = (screenWidth - 40) + 'px';
      } else {
        (item as HTMLElement).style.width = '1080px';
      }
      let marginVal = ((screenWidth - elemWidth) / 2) - 8;
      marginVal = (marginVal < 20) ? 20 : marginVal;
      (item as HTMLElement).style.margin = '0px ' + marginVal + 'px';
    });

    let carouselContentDiv = document.querySelector('.carousel-content') as HTMLElement;
    carouselContentDiv.style.margin = 'auto ' + ((screenWidth - carouselContentDiv.offsetWidth) / 2) + 'px';
  }
}
