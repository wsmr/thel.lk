import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmanager',
  templateUrl: 'bmanager.html',
})
export class BmanagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  bDetails(){
  	alert('Branch Detaidls');
  }

  eDetails(){
  	alert('Emplyee Details');
  }

  sDetails(){
  	alert('Suppliers Details');
  }

  oDetails(){
  	alert('Other Branch Details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmanagerPage');
  }

}
