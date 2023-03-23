import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest12feedback1',
  templateUrl: './quest12feedback1.component.html',
  styleUrls: ['./quest12feedback1.component.scss'],
})
export class Quest12feedback1Component implements OnInit {
  quest1_2: string = 'gold';
  anzahlPunkte: number = 9;
  anzahlParlamentarier: number = 6;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToQuest12Feedback2(): void {
    this.router.navigateByUrl('/quest12feedback2');
  }
}
