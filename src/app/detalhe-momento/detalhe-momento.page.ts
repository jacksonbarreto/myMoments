import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalDetalheMomentoPage } from '../modal-detalhe-momento/modal-detalhe-momento.page';


@Component({
  selector: 'app-detalhe-momento',
  templateUrl: './detalhe-momento.page.html',
  styleUrls: ['./detalhe-momento.page.scss'],
})
export class DetalheMomentoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalDetalhesMomento() {
    const modal = await this.modalController.create({
      component: ModalDetalheMomentoPage,
      cssClass: "my-detal-moment-modal-css"
    });
    return await modal.present();
  }  
}
