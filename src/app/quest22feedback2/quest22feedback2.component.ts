import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest22feedback2',
  templateUrl: './quest22feedback2.component.html',
  styleUrls: ['./quest22feedback2.component.scss'],
})
export class Quest22feedback2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest22Dialogue2(): void {
    this.router.navigateByUrl('/quest22dialogue2');
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
