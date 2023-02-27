import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Quest11Component } from './quest11/quest11.component';
import { Quest112Component } from './quest112/quest112.component';
import { Quest12Component } from './quest12/quest12.component';
import { Quest21Component } from './quest21/quest21.component';
import { Quest22Component } from './quest22/quest22.component';
import { Quest23Component } from './quest23/quest23.component';
import { Quest24Component } from './quest24/quest24.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { Text1Component } from './text1/text1.component';
import { Text2Component } from './text2/text2.component';
import { Text3Component } from './text3/text3.component';

import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackComponent,
    Modul1Component,
    Modul2Component,
    Quest11Component,
    Quest112Component,
    Quest12Component,
    Text1Component,
    Text2Component,
    Text3Component,
    Quest21Component,
    Quest22Component,
    Quest23Component,
    Quest24Component,
    StartComponent,
  ],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
