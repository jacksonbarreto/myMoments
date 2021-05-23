import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private senha: string = "";
  constructor(private screenOrientation: ScreenOrientation, public platform: Platform, public ctrl: NavController) {}  
  
  ngOnInit(){
    if(this.platform.is('android'))
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

     
  }

public onClick(btn){  
  this.senha = this.senha +""+ btn;
  let radio1 = document.getElementById('radio1');
  let radio2 = document.getElementById('radio2');
  let radio3 = document.getElementById('radio3');
  let radio4 = document.getElementById('radio4');
  let radio5 = document.getElementById('radio5');
  switch(this.senha.length){
    case 1:
      radio1.setAttribute("value", "r1");
      break;
    case 2:
      radio2.setAttribute("value", "r2");
      break;
    case 3:
      radio3.setAttribute("value", "r3");
      break;
    case 4:
      radio4.setAttribute("value", "r4");
      break;
    case 5:
      radio5.setAttribute("value", "r5");
      this.senha="";
      this.clearAllRadio();
      this.ctrl.navigateForward('pagina-inicial');
      break;
  }
}
public clearAllRadio(){
  let radio1 = document.getElementById('radio1');
  let radio2 = document.getElementById('radio2');
  let radio3 = document.getElementById('radio3');
  let radio4 = document.getElementById('radio4');
  let radio5 = document.getElementById('radio5');
  radio1.removeAttribute("value");
  radio2.removeAttribute("value");
  radio3.removeAttribute("value");
  radio4.removeAttribute("value");
  radio5.removeAttribute("value");
}
}
