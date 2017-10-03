import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  isScrolled = true;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log('booya');
    if (window.scrollY > 70) {
      this.isScrolled = true;
      console.log('here??');
    } else {
      this.isScrolled = false;
    }
  }

}
