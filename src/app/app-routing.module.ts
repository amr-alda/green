import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from '../app/feedback/feedback.component'
import {Login3Component} from '../app/login3/login3.component'
import {Modul1Component} from '../app/modul1/modul1.component'
import {Modul2Component} from '../app/modul2/modul2.component'
import {Modul3Component} from '../app/modul3/modul3.component'
import {Modul4Component} from '../app/modul4/modul4.component'


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
    path: 'login3', 
    component: Login3Component
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
