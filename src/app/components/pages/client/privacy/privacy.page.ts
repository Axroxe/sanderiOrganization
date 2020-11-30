import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  translate = false;
  constructor() { }

  ngOnInit() {
  }

  change_language(){
    this.translate = true;
  }

}
