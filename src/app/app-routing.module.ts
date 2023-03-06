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
    path: 'quest11dialogue1', 
    component: Quest11dialogue1Component
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
