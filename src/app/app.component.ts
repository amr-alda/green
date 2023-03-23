import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {}

}
