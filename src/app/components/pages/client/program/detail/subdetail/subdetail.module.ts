import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubdetailPageRoutingModule } from './subdetail-routing.module';

import { SubdetailPage } from './subdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubdetailPageRoutingModule
  ],
  declarations: [SubdetailPage]
})
export class SubdetailPageModule {}
