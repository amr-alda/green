import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  resetAllUsers(): void {
    if (confirm('Sind Sie sicher dass Sie alle Nutzer zurücksetzen wollen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  resetUser(): void {
    if (confirm('Sind Sie sicher dass Sie diesen Nutzer zurücksetzen wollen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

}
