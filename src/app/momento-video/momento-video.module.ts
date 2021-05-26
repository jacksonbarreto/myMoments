import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentoVideoPageRoutingModule } from './momento-video-routing.module';

import { MomentoVideoPage } from './momento-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentoVideoPageRoutingModule
  ],
  declarations: [MomentoVideoPage]
})
export class MomentoVideoPageModule {}
