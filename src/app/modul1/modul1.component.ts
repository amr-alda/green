import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {
  quest1_1: string = 'gold';
  quest1_2: string = 'bronze';

  quest12_locked: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToModul1Videos(): void {
    this.router.navigateByUrl('/modul1videos');
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }

  goToQuest11(): void {
    this.router.navigateByUrl('/quest11');
  }

  goToQuest11Dialogue1(): void {
    this.router.navigateByUrl('/quest11dialogue1');
  }

  goToQuest12Dialogue1(): void {
    this.router.navigateByUrl('/quest12dialogue1');
  }
}
