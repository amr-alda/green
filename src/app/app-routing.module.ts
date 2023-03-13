import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from '../app/feedback/feedback.component'
import {LoginComponent} from './login/login.component'
import {Modul1Component} from '../app/modul1/modul1.component'
import {Modul2Component} from '../app/modul2/modul2.component'
import {Modul3Component} from '../app/modul3/modul3.component'
import {Modul4Component} from '../app/modul4/modul4.component'
import { Quest11Component } from './quest11/quest11.component'
import { Quest112Component } from './quest112/quest112.component';
import { Quest12Component } from './quest12/quest12.component'
import { Text1Component } from './text1/text1.component';
import { Text2Component } from './text2/text2.component';
import { Text3Component } from './text3/text3.component';
import { Quest21Component } from './quest21/quest21.component'
import { Quest22Component } from './quest22/quest22.component'
import { Quest23Component } from './quest23/quest23.component'
import { Quest24Component } from './quest24/quest24.component'
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Quest11feedback1Component } from './quest11feedback1/quest11feedback1.component';
import { Quest11feedback2Component } from './quest11feedback2/quest11feedback2.component';

import { Quest11dialogue1Component } from './quest11dialogue1/quest11dialogue1.component';
import { Quest11dialogue2Component } from './quest11dialogue2/quest11dialogue2.component';

import { Quest12dialogue1Component } from './quest12dialogue1/quest12dialogue1.component';
import { Quest12dialogue2Component } from './quest12dialogue2/quest12dialogue2.component';

import { Quest21dialogue1Component } from './quest21dialogue1/quest21dialogue1.component';
import { Quest21dialogue2Component } from './quest21dialogue2/quest21dialogue2.component';

import { Quest22dialogue1Component } from './quest22dialogue1/quest22dialogue1.component';
import { Quest22dialogue2Component } from './quest22dialogue2/quest22dialogue2.component';

import { Quest23dialogue1Component } from './quest23dialogue1/quest23dialogue1.component';
import { Quest23dialogue2Component } from './quest23dialogue2/quest23dialogue2.component';

import { Quest24dialogue1Component } from './quest24dialogue1/quest24dialogue1.component';
import { Quest24dialogue2Component } from './quest24dialogue2/quest24dialogue2.component';

import { Modul1videosComponent } from './modul1videos/modul1videos.component';
import { Modul2videosComponent } from './modul2videos/modul2videos.component';

import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'feedback', 
    component: FeedbackComponent
  },
  {
    path: 'admin', 
    component: AdminComponent
  },
  {
    path: 'settings', 
    component: SettingsComponent
  },
  {
    path: 'modul1videos', 
    component: Modul1videosComponent
  },
  {
    path: 'modul2videos', 
    component: Modul2videosComponent
  },
  {
    path: 'quest11dialogue1', 
    component: Quest11dialogue1Component
  },
  {
    path: 'quest11dialogue2', 
    component: Quest11dialogue2Component
  },
  {
    path: 'quest12dialogue1', 
    component: Quest12dialogue1Component
  },
  {
    path: 'quest12dialogue2', 
    component: Quest12dialogue2Component
  },
  {
    path: 'quest21dialogue1', 
    component: Quest21dialogue1Component
  },
  {
    path: 'quest21dialogue2', 
    component: Quest21dialogue2Component
  },
  {
    path: 'quest22dialogue1', 
    component: Quest22dialogue2Component
  },
  {
    path: 'quest22dialogue2', 
    component: Quest22dialogue2Component
  },
  {
    path: 'quest23dialogue1', 
    component: Quest23dialogue1Component
  },
  {
    path: 'quest23dialogue2', 
    component: Quest23dialogue2Component
  },
  {
    path: 'quest24dialogue1', 
    component: Quest24dialogue1Component
  },
  {
    path: 'quest24dialogue2', 
    component: Quest24dialogue2Component
  },
  {
    path: 'quest11feedback1', 
    component: Quest11feedback1Component
  },
  {
    path: 'quest11feedback2', 
    component: Quest11feedback2Component
  },
  {
    path: 'impressum', 
    component: ImpressumComponent
  },
  {
    path: 'newpassword', 
    component: NewpasswordComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'start', 
    component: StartComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'modul1', 
    component: Modul1Component
  },
  {
    path: 'modul2', 
    component: Modul2Component
  },
  {
    path: 'modul3', 
    component: Modul3Component
  },
  {
    path: 'modul4', 
    component: Modul4Component
  },
  {
    path: 'quest11', 
    component: Quest11Component
  },
  {
    path: 'quest112', 
    component: Quest112Component
  },
  {
    path: 'quest12', 
    component: Quest12Component
  },
  {
    path: 'text1', 
    component: Text1Component
  },
  {
    path: 'text2', 
    component: Text2Component
  },
  {
    path: 'text3', 
    component: Text3Component
  },
  {
    path: 'quest21', 
    component: Quest21Component
  },
  {
    path: 'quest22', 
    component: Quest22Component
  },
  {
    path: 'quest23', 
    component: Quest23Component
  },
  {
    path: 'quest24', 
    component: Quest24Component
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
