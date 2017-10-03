import { Component, OnInit, HostListener } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // title = ['Web Developer', 'Malaysian', 'Student'];

  constructor() {
    PageScrollConfig.defaultScrollOffset = 100;
    PageScrollConfig.defaultDuration = 1000;
    PageScrollConfig.defaultInterruptible = false;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        console.log('t', t);
        console.log('b', b);
        console.log('c', c);
        console.log('d', d);
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  ngOnInit() {
  }

}
