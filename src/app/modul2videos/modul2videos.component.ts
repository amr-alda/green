import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-modul2videos',
  templateUrl: './modul2videos.component.html',
  styleUrls: ['./modul2videos.component.scss'],
})
export class Modul2videosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
