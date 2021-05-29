import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { ModalCompraEfetuadaPage } from '../modal-compra-efetuada/modal-compra-efetuada.page';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  constructor(public ctrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
  }

  retirarMomentos() {
    this.ctrl.navigateForward('momento-video');
  }

  nextStep() {
    this.ctrl.navigateForward('dados-encomenda');
  }

  async fastCheckOut(){
    const modal = await this.modalController.create({
      component: ModalCompraEfetuadaPage,
      cssClass: 'modal-vivenciar-css'
    });
    return await modal.present();
  }

}
