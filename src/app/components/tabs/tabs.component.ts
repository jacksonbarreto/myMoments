import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  private subjectDeleteAction: Subject<boolean>;

  constructor(public ctrl: NavController, public router: Router) {
    this.subjectDeleteAction = new Subject();
  }

  ngOnInit() { }

  revelarMomentos() {
    this.ctrl.navigateForward('comprar');
  }

  public getSubjectDeleteAction(): Subject<boolean> {
    return this.subjectDeleteAction;
  }

  public deleteItem(): void {
    this.subjectDeleteAction.next(true);
  }
}
