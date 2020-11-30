import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../../../services/auth.service';

@Component({
  selector: 'app-subdetail',
  templateUrl: './subdetail.page.html',
  styleUrls: ['./subdetail.page.scss'],
})
export class SubdetailPage implements OnInit {

  name: any;
  subname: any;

  constructor(
      private activatedRoute: ActivatedRoute,
      public authService: AuthService
  ) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params.name;
    this.subname = this.activatedRoute.snapshot.params.subname;
  }

}
