import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentosPageRoutingModule } from './momentos-routing.module';

import { MomentosPage } from './momentos.page';
import { TabsComponent } from '../components/tabs/tabs.component';
import { MediaItemComponent } from '../components/media-item/media-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentosPageRoutingModule
  ],
  declarations: [MomentosPage, TabsComponent, MediaItemComponent]
})
export class MomentosPageModule { }
