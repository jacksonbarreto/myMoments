import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ModalSearchPage } from '../modal-search/modal-search.page';
import { NotificacoesPage } from '../notificacoes/notificacoes.page';
import { ModalVivenciarMomentosPage } from '../modal-vivenciar-momentos/modal-vivenciar-momentos.page';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController, public ctrl: NavController) { }

  ngOnInit() {
  }

  async presentModalSearch() {
    const modal = await this.modalController.create({
      component: ModalSearchPage,
      cssClass: 'modal-search-css'
    });
    return await modal.present();
  }  

  async presentModalNotifica() {
    const modal = await this.modalController.create({
      component: NotificacoesPage
    });
    return await modal.present();
  }  
  
  async presentModalVivenciar(){
    const modal = await this.modalController.create({
      component: ModalVivenciarMomentosPage,
      cssClass: 'modal-vivenciar-css'
    });
    return await modal.present();
  }

  logoff(){
    this.ctrl.navigateRoot('home');
  }

  verAlbum(evento){
    this.ctrl.navigateRoot('momentos');
    
  }
}
