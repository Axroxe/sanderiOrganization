import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
