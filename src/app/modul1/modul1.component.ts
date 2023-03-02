import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {

  username:string = "Name";
  
  quest1_1: string = 'gold';
  quest1_2: string = 'bronze';

  quest12_locked: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToQuest11(): void {
    this.router.navigateByUrl('/quest11');
  }

  goToQuest12(): void {
    this.router.navigateByUrl('/quest12');
  }
}
