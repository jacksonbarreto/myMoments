import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-inserir-morada',
  templateUrl: './inserir-morada.page.html',
  styleUrls: ['./inserir-morada.page.scss'],
})
export class InserirMoradaPage implements OnInit {

  constructor(public ctrl: NavController) { }

  ngOnInit() {
  }

  cancelar() {
    this.ctrl.pop();
  }
  guardar() {
    this.ctrl.pop();
  }

}
