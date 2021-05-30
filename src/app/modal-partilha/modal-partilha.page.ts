import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-partilha',
  templateUrl: './modal-partilha.page.html',
  styleUrls: ['./modal-partilha.page.scss'],
})
export class ModalPartilhaPage implements OnInit {

  public searchbar: any;
  public items: any;
  public amigos: any;
  constructor() { }

  ngOnInit() {
    this.searchbar = document.querySelector('ion-searchbar');
    this.searchbar.addEventListener('ionInput', this.handleInput);

    fetch('./assets/data/amigos.json')
      .then(res => res.json())
      .then(json => {
        this.amigos = json;
      });
      console.log(this.amigos);
  }


  handleInput(event) {
    this.items = Array.from(document.querySelector('ion-list').children);

    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }

  partilhaAmiguinho(btn) {
    console.log(this.amigos);
  }
}
