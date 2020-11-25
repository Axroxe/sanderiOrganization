import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

registerLocaleData(en);

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  entryComponents: [

  ],
  providers: [

  ],
})
export class ModalModule { }
