import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vivenciar-momentos',
  templateUrl: './modal-vivenciar-momentos.page.html',
  styleUrls: ['./modal-vivenciar-momentos.page.scss'],
})
export class ModalVivenciarMomentosPage implements OnInit {
  public conteudoModal: any;
  public modalP1:any;
  public modalP2:any;
  public modalP3:any;

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

}
