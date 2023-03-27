import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {Modul1Component} from '../app/modul1/modul1.component'
import {Modul2Component} from '../app/modul2/modul2.component'
import {Modul3Component} from '../app/modul3/modul3.component'
import {Modul4Component} from '../app/modul4/modul4.component'
import { Quest11Component } from './quest11/quest11.component'
import { Quest12Component } from './quest12/quest12.component'
import { Quest21Component } from './quest21/quest21.component'
import { Quest22Component } from './quest22/quest22.component'
import { Quest23Component } from './quest23/quest23.component'
import { Quest24Component } from './quest24/quest24.component'
import { RegisterComponent } from './register/register.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Impressum2Component } from './impressum2/impressum2.component';

import { OnboardingComponent } from './onboarding/onboarding.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { Onboarding3Component } from './onboarding3/onboarding3.component';
import { Onboarding4Component } from './onboarding4/onboarding4.component';
import { Onboarding5Component } from './onboarding5/onboarding5.component';

import { Quest11feedback1Component } from './quest11feedback1/quest11feedback1.component';
import { Quest11feedback2Component } from './quest11feedback2/quest11feedback2.component';

import { Quest11dialogue1Component } from './quest11dialogue1/quest11dialogue1.component';
import { Quest11dialogue2Component } from './quest11dialogue2/quest11dialogue2.component';

import { Quest12feedback1Component } from './quest12feedback1/quest12feedback1.component';
import { Quest12feedback2Component } from './quest12feedback2/quest12feedback2.component';

import { Quest12dialogue1Component } from './quest12dialogue1/quest12dialogue1.component';
import { Quest12dialogue2Component } from './quest12dialogue2/quest12dialogue2.component';

import { Quest21feedback1Component } from './quest21feedback1/quest21feedback1.component';
import { Quest21feedback2Component } from './quest21feedback2/quest21feedback2.component';

import { Quest21dialogue1Component } from './quest21dialogue1/quest21dialogue1.component';
import { Quest21dialogue2Component } from './quest21dialogue2/quest21dialogue2.component';

import { Quest22feedback1Component } from './quest22feedback1/quest22feedback1.component';
import { Quest22feedback2Component } from './quest22feedback2/quest22feedback2.component';

import { Quest22dialogue1Component } from './quest22dialogue1/quest22dialogue1.component';
import { Quest22dialogue2Component } from './quest22dialogue2/quest22dialogue2.component';

import { Quest23feedback1Component } from './quest23feedback1/quest23feedback1.component';
import { Quest23feedback2Component } from './quest23feedback2/quest23feedback2.component';

import { Quest23dialogue1Component } from './quest23dialogue1/quest23dialogue1.component';
import { Quest23dialogue2Component } from './quest23dialogue2/quest23dialogue2.component';

import { Quest24feedback1Component } from './quest24feedback1/quest24feedback1.component';
import { Quest24feedback2Component } from './quest24feedback2/quest24feedback2.component';

import { Quest24dialogue1Component } from './quest24dialogue1/quest24dialogue1.component';
import { Quest24dialogue2Component } from './quest24dialogue2/quest24dialogue2.component';

import { Modul1videosComponent } from './modul1videos/modul1videos.component';
import { Modul2videosComponent } from './modul2videos/modul2videos.component';


import { AdminComponent } from './admin/admin.component';

import { Modul1feedbackComponent } from './modul1feedback/modul1feedback.component';
import { Modul2feedbackComponent } from './modul2feedback/modul2feedback.component';

import { Quest11feedbackComponent } from './quest11feedback/quest11feedback.component';
import { Quest12feedbackComponent } from './quest12feedback/quest12feedback.component';

import { Quest21feedbackComponent } from './quest21feedback/quest21feedback.component';
import { Quest22feedbackComponent } from './quest22feedback/quest22feedback.component';


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
    path: 'admin', 
    component: AdminComponent
  },
  {
    path: 'quest11feedback', 
    component: Quest11feedbackComponent
  },
  {
    path: 'quest21feedback', 
    component: Quest21feedbackComponent
  },
  {
  path: 'quest22feedback', 
  component: Quest22feedbackComponent
  },
  {
    path: 'quest12feedback', 
    component: Quest12feedbackComponent
  },
  {
    path: 'modul1feedback', 
    component: Modul1feedbackComponent
  },
  {
    path: 'modul2feedback', 
    component: Modul2feedbackComponent
  },
  {
    path: 'onboarding', 
    component: OnboardingComponent
  },
  {
    path: 'onboarding2', 
    component: Onboarding2Component
  },
  {
    path: 'onboarding3', 
    component: Onboarding3Component
  },
  {
    path: 'onboarding4', 
    component: Onboarding4Component
  },
  {
    path: 'onboarding5', 
    component: Onboarding5Component
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
    component: Quest22dialogue1Component
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
    path: 'quest12feedback1', 
    component: Quest12feedback1Component
  },
  {
    path: 'quest12feedback2', 
    component: Quest12feedback2Component
  },
  {
    path: 'quest21feedback1', 
    component: Quest21feedback1Component
  },
  {
    path: 'quest21feedback2', 
    component: Quest21feedback2Component
  },
  {
    path: 'quest22feedback1', 
    component: Quest22feedback1Component
  },
  {
    path: 'quest22feedback2', 
    component: Quest22feedback2Component
  },
  {
    path: 'quest23feedback1', 
    component: Quest23feedback1Component
  },
  {
    path: 'quest23feedback2', 
    component: Quest23feedback2Component
  },
  {
    path: 'quest24feedback1', 
    component: Quest24feedback1Component
  },
  {
    path: 'quest24feedback2', 
    component: Quest24feedback2Component
  },
  {
    path: 'impressum', 
    component: ImpressumComponent
  },
  {
    path: 'impressum2', 
    component: Impressum2Component
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
