import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { BmanagerPage } from '../bmanager/bmanager';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username;
  public password;

  constructor(public navCtrl: NavController,
              public http: Http) {

  }

  loginCheck() {
    console.log(this.username);
    console.log(this.password);

    this.http.get('http://18.221.32.175/testapi/login.php?username='+this.username+"&password="+this.password)
    .subscribe(
          (data) => {
                      if(data.status === 201) {
                        this.navCtrl.push(BmanagerPage);
                      }
                       
                      else {
                        this.navCtrl.push(BmanagerPage);
                        // alert('Username or password wrong');
                      }
    
                    }
                );

  }

  signCheck(){
    alert('Contact Administrator');
  }

}
