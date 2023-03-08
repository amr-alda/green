import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul1videos',
  templateUrl: './modul1videos.component.html',
  styleUrls: ['./modul1videos.component.scss'],
})
export class Modul1videosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

}
