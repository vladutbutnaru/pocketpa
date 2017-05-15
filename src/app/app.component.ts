import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { More } from '../pages/more/more';
import { Add } from '../pages/add/add';
import { Profile } from '../pages/profile/profile';
import { Wizard } from '../pages/wizard/wizard';
import { Clients } from '../pages/clients/clients';
import { Services } from '../pages/services/services';
import { Taxes } from '../pages/taxes/taxes';
import { Discounts } from '../pages/discounts/discounts';
import { Settings } from '../pages/settings/settings';
import { AddApp } from '../pages/adds/addApp';
import { All } from '../pages/all/all';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;
  isLoggedIn: boolean;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

