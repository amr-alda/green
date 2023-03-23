import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-quest12',
  templateUrl: './quest12.component.html',
  styleUrls: ['./quest12.component.scss'],
})
export class Quest12Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest12feedback1(): void {
    this.router.navigateByUrl('/quest12feedback1');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
