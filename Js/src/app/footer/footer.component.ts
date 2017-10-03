import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickFacebook() {
    window.open('https://www.facebook.com/oojiashyang', '_blank');
  }

  onClickInstagram() {
    window.open('https://www.instagram.com/oojiashyang', '_blank');
  }

  onClickLinkedIn() {
    window.open('https://www.linkedin.com/in/jia-shyang-oo-b208a7124', '_blank');
  }

}
