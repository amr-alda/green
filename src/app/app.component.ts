import { Component} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{

  showHeader: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHeader = false;
        } 
        else if (event['url'] == '/register') {
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
        }
      }
    });
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
  
}


