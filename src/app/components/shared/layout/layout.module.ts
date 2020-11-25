import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import {IonicModule} from '@ionic/angular';


registerLocaleData(en);

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AsideComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
})
export class LayoutModule { }
