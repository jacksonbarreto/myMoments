import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheMomentoPageRoutingModule } from './detalhe-momento-routing.module';

import { DetalheMomentoPage } from './detalhe-momento.page';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheMomentoPageRoutingModule    
  ],
  declarations: [DetalheMomentoPage, TabsComponent]
})
export class DetalheMomentoPageModule {}
