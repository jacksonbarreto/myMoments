import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vivenciar-momentos',
  templateUrl: './modal-vivenciar-momentos.page.html',
  styleUrls: ['./modal-vivenciar-momentos.page.scss'],
})
export class ModalVivenciarMomentosPage implements OnInit {
    public video:boolean=false;

    public mostra1:boolean=true;
    public mostra2:boolean=false;

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  onSelectChange(event) {
    const selecionado=event.detail.value;
    if(selecionado == "video"){     
      this.video = true;
    }else{      
      this.video = false;
    }
  }

  comecaRegistar(){
    this.mostra1=false;
    this.mostra2=true;
  }

  terminarVivenciarMomento(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
