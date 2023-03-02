import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{

  username:string = "Name";

  constructor(private router: Router) {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
  
}


