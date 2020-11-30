import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  translate = false;
  constructor() { }

  ngOnInit() {
  }

  change_language(){
    this.translate = true;
  }

}
