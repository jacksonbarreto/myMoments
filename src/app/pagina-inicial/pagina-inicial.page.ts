import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonCard, ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ModalSearchPage } from '../modal-search/modal-search.page';
import { NotificacoesPage } from '../notificacoes/notificacoes.page';
import { ModalVivenciarMomentosPage } from '../modal-vivenciar-momentos/modal-vivenciar-momentos.page';
import { MediaItemComponent } from '../components/media-item/media-item.component';
import { SelectModeService } from '../services/select-mode.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit, AfterViewInit {

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;

  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;


  constructor(private selectModeService: SelectModeService, public modalController: ModalController, public alertController: AlertController, public navRoot: NavController) {
    this.selectMode = false;
    this.selectedCounter = 0;
  }


  ngAfterViewInit(): void {
    this.cardArray = this.mediaItems.toArray();
    this.cardArray.forEach(item => {
      item.getStatus().subscribe(selectMode => {
        this.selectModeService.enableSelectMode(this.cardArray);
        if (selectMode)
          this.selectMode = true;
      }
      );
      item.getCounterStatus().subscribe(counterStatus => {
        if (counterStatus)
          this.selectedCounter++;
        else
          this.selectedCounter--;
      });
    }
    );
  }



  ngOnInit() {
  }

  public isSelectMode(): boolean {
    return this.selectMode;
  }

  public selectAll(): void {
    this.selectModeService.selectAll(this.cardArray);
  }

  public unSelectAll(): void {
    this.selectModeService.unSelectAll(this.cardArray);
  }

  public cancelSelect(): void {
    this.selectModeService.disableSelectMode(this.cardArray);
    this.setSelectMode(false);
  }

  public setSelectMode(status: boolean) {
    this.selectMode = status;
  }

  public getSelectCounter(): number {
    return this.selectedCounter;
  }

  public getMsgCounter(): string {
    switch (this.getSelectCounter()) {
      case 0:
        return "Selecionar itens";
      case 1:
        return "1 selecionado";
      default:
        return this.getSelectCounter() + " selecionados"
    }
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

  async presentModalVivenciar() {
    const modal = await this.modalController.create({
      component: ModalVivenciarMomentosPage,
      cssClass: 'modal-vivenciar-css'
    });
    return await modal.present();
  }

  logoff() {
    this.navRoot.navigateRoot('home');
  }

  public getNavRoot(): NavController {
    return this.navRoot;
  }

}