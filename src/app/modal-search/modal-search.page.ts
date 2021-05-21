import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage{

  constructor(public modalController:ModalController) { } 

  dismiss() {
    this.modalController.dismiss({
     'dismissed': true
   });
  }
}
