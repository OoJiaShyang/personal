import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onClick(page: string) {
    this.router.navigate([page]);
  }

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
