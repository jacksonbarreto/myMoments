import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ModalSearchPage } from '../modal-search/modal-search.page';
import { NotificacoesPage } from '../notificacoes/notificacoes.page';
import { ModalVivenciarMomentosPage } from '../modal-vivenciar-momentos/modal-vivenciar-momentos.page';
import { MediaItemComponent } from '../components/media-item/media-item.component';

import { SelectModeService } from '../services/select-mode.service';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit, AfterViewInit {

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;
  @ViewChild(TabsComponent) tabBar: TabsComponent;

  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;
  private subjectDelete: Subject<boolean>;
  private toolbarVisibleStatus: any;

  constructor(private selectModeService: SelectModeService, public modalController: ModalController, public alertController: AlertController, public navRoot: NavController, public toastController: ToastController) {
    this.selectMode = false;
    this.selectedCounter = 0;
  }


  ngAfterViewInit(): void {
    this.cardArray = this.mediaItems.toArray();
    this.subjectDelete = new Subject();
    this.toolbarVisibleStatus = document.getElementById("tabP");

    this.subjectDelete.subscribe(obs => {

      this.tabBar.getPresubjectDeleteAction().subscribe(deleteAction => {
        console.log("veio do predelete");
        if (this.getSelectCounter() > 0) {
          this.tabBar.apagar();
        } else {
          this.msgError("Selecione pelo menos um momento.");
        }
      });
    });

    this.subjectDelete.subscribe(obs => {

      this.tabBar.getSubjectDeleteAction().subscribe(deleteAction => {
        if (deleteAction) {
          this.selectModeService.removeSelected(this.cardArray);
        }
      });
    });

    this.cardArray.forEach(item => {
      item.getStatus().subscribe(selectMode => {
        this.selectModeService.enableSelectMode(this.cardArray);
        if (selectMode) {
          this.selectMode = true;
          this.toolbarVisibleStatus.removeAttribute("hidden");
          this.subjectDelete.next(true);
        }
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

  async msgError(msg: string): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
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
    this.toolbarVisibleStatus.setAttribute("hidden", true);
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