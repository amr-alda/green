import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from '../app/feedback/feedback.component'
import {LoginComponent} from './login/login.component'
import {Modul1Component} from '../app/modul1/modul1.component'
import {Modul2Component} from '../app/modul2/modul2.component'
import {Modul3Component} from '../app/modul3/modul3.component'
import {Modul4Component} from '../app/modul4/modul4.component'
import { Quest11Component } from './quest11/quest11.component';
import { Quest12Component } from './quest12/quest12.component';
import { Quest21Component } from './quest21/quest21.component';
import { Quest22Component } from './quest22/quest22.component';
import { Quest23Component } from './quest23/quest23.component';
import { Quest24Component } from './quest24/quest24.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feedback', 
    component: FeedbackComponent
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
    path: 'quest12', 
    component: Quest12Component
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
