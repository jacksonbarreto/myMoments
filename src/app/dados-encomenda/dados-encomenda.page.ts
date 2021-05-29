import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-encomenda',
  templateUrl: './dados-encomenda.page.html',
  styleUrls: ['./dados-encomenda.page.scss'],
})
export class DadosEncomendaPage implements OnInit {

  constructor(private ctrl: NavController) { }

  ngOnInit() {
  }

  novaMorada(){
    this.ctrl.navigateForward('inserir-morada');
  }

  novaFormaPagamento(){
    this.ctrl.navigateForward('inserir-pagamento');
  }


}
