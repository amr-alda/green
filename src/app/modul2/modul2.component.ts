import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss'],
})
export class Modul2Component implements OnInit {
  quest1_1: string = 'grey';
  quest1_2: string = 'grey';

  quest22_locked: boolean = true;
  quest23_locked: boolean = true;
  quest24_locked: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToQuest21(): void {
    this.router.navigateByUrl('/quest21');
  }

  goToQuest22(): void {
    this.router.navigateByUrl('/quest22');
  }

  goToQuest23(): void {
    this.router.navigateByUrl('/quest23');
  }

  goToQuest24(): void {
    this.router.navigateByUrl('/quest24');
  }
}
