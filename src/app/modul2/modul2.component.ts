import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss'],
})
export class Modul2Component implements OnInit {

  quest2_1: string = 'grey';
  quest2_2: string = 'grey';
  quest2_3: string = 'grey';
  quest2_4: string = 'grey';

  quest21_locked: boolean = false;
  quest22_locked: boolean = false;
  quest23_locked: boolean = true;
  quest24_locked: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToModul2Videos(): void {
    this.router.navigateByUrl('/modul2videos');
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

  goToQuest21Dialogue1(): void{
    this.router.navigateByUrl('/quest21dialogue1');
  }

  goToQuest21Dialogue2(): void {
    this.router.navigateByUrl('/quest21dialogue2');
  }

  goToQuest22Dialogue1(): void{
    this.router.navigateByUrl('/quest22dialogue1');
  }

  goToQuest22Dialogue2(): void {
    this.router.navigateByUrl('/quest22dialogue2');
  }

  goToQuest23Dialogue1(): void{
    if (this.quest23_locked == false) {
    this.router.navigateByUrl('/quest23dialogue1');
    }
  }

  goToQuest23Dialogue2(): void {
    this.router.navigateByUrl('/quest23dialogue2');
  }

  goToQuest24Dialogue1(): void{
    if (this.quest24_locked == false) {
    this.router.navigateByUrl('/quest24dialogue1');
    }
  }

  goToQuest24Dialogue2(): void {
    this.router.navigateByUrl('/quest24dialogue2');
  }
}
