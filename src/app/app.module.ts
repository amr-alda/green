import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';
import { LoginComponent } from './login/login.component';
import { ImpressumComponent } from './impressum/impressum.component';
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
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AdminComponent } from './admin/admin.component';

import { Quest11feedback1Component } from './quest11feedback1/quest11feedback1.component';
import { Quest11feedback2Component } from './quest11feedback2/quest11feedback2.component';

import { Quest12feedback1Component } from './quest12feedback1/quest12feedback1.component';
import { Quest12feedback2Component } from './quest12feedback2/quest12feedback2.component';

import { Quest21feedback1Component } from './quest21feedback1/quest21feedback1.component';
import { Quest21feedback2Component } from './quest21feedback2/quest21feedback2.component';

import { Quest22feedback1Component } from './quest22feedback1/quest22feedback1.component';
import { Quest22feedback2Component } from './quest22feedback2/quest22feedback2.component';

import { Quest23feedback1Component } from './quest23feedback1/quest23feedback1.component';
import { Quest23feedback2Component } from './quest23feedback2/quest23feedback2.component';

import { Quest24feedback1Component } from './quest24feedback1/quest24feedback1.component';
import { Quest24feedback2Component } from './quest24feedback2/quest24feedback2.component';


import { Modul1videosComponent } from './modul1videos/modul1videos.component';
import { Modul2videosComponent } from './modul2videos/modul2videos.component';

import { Modul1feedbackComponent } from './modul1feedback/modul1feedback.component';
import { Modul2feedbackComponent } from './modul2feedback/modul2feedback.component';

import { Quest11feedbackComponent } from './quest11feedback/quest11feedback.component';
import { Quest12feedbackComponent } from './quest12feedback/quest12feedback.component';

import { Quest21feedbackComponent } from './quest21feedback/quest21feedback.component';


@NgModule({
  declarations: [
    Quest11feedbackComponent,
    Quest12feedbackComponent,
    Quest21feedbackComponent,
    AppComponent,
    AdminComponent,
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
    ImpressumComponent,
    Quest11feedback1Component,
    Quest11feedback2Component,
    Modul1videosComponent,
    Modul2videosComponent,
    Quest12feedback1Component,
    Quest12feedback2Component,
    Quest21feedback1Component,
    Quest21feedback2Component,
    Quest22feedback1Component,
    Quest22feedback2Component,
    Quest23feedback1Component,
    Quest23feedback2Component,
    Quest24feedback1Component,
    Quest24feedback2Component,
    Modul1feedbackComponent,
    Modul2feedbackComponent,
  ],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    DragDropModule,
    YouTubePlayerModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
