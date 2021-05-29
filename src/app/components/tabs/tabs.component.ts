import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(public ctrl: NavController, public router: Router) { }

  ngOnInit() {}

  revelarMomentos(){
    this.ctrl.navigateForward('comprar');
    //this.router.navigateByUrl('/comprar');
  }
}
