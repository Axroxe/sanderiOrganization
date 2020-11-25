import { Component, OnInit } from '@angular/core';
import {AuthServices} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
      public authService: AuthServices,
      private router: Router,
      public modalController: ModalController,
  ) { }

  ngOnInit() {

  }
}
