import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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

@NgModule({
  declarations: [
    MyApp,
    Login,
    More,
    Add,
    Profile,
    Wizard,
    Clients,
    Services,
    Taxes,
    Settings,
    Discounts,
    AddApp,
    All
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    More,
    Add,
    Profile,
    Wizard,
    Clients,
    Services,
    Taxes,
    Settings,
    Discounts,
    AddApp,
    All
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
