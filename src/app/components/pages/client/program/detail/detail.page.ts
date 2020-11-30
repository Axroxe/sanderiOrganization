import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../../services/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  name: any;
  constructor(
      private activatedRoute: ActivatedRoute,
      public authService: AuthService
  ) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params.name;
  }
}
