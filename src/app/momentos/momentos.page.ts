import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  constructor(public ctrl: NavController) { }

  ngOnInit() {
    
  }

  verMomento(evento){
    this.ctrl.navigateForward('detalhe-momento');    
  }

  

}
