import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
	connection: boolean;
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
