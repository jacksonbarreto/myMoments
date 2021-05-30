import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-apagar-momento',
  templateUrl: './modal-apagar-momento.page.html',
  styleUrls: ['./modal-apagar-momento.page.scss'],
})
export class ModalApagarMomentoPage implements OnInit {

  constructor(public modalController: ModalController, public toastController:ToastController) { }

  ngOnInit() {
  }
  cancelar(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  confirma(){
    this.modalController.dismiss({
      'dismissed': true
    });
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Momento apagado com sucesso.',
      duration: 2000
    });
    toast.present();
  }
}
