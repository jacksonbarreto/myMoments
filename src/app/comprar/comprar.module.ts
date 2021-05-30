import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarPageRoutingModule } from './comprar-routing.module';

import { ComprarPage } from './comprar.page';
import { MediaItemComponent } from '../components/media-item/media-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarPageRoutingModule
  ],
  declarations: [ComprarPage, MediaItemComponent]
})
export class ComprarPageModule { }
