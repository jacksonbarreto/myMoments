import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage {

  constructor(public modalController:ModalController) { }

  dismiss() {
    this.modalController.dismiss({
     'dismissed': true
   });
  }

}
