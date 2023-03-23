import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest12feedback2',
  templateUrl: './quest12feedback2.component.html',
  styleUrls: ['./quest12feedback2.component.scss'],
})
export class Quest12feedback2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest12Dialogue2(): void {
    this.router.navigateByUrl('/quest12dialogue2');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
