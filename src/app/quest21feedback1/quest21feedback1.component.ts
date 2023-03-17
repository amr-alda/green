import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest21feedback1',
  templateUrl: './quest21feedback1.component.html',
  styleUrls: ['./quest21feedback1.component.scss'],
})
export class Quest21feedback1Component implements OnInit {

  quest2_1: string = 'gold';
  anzahlPunkte: number = 9;
  anzahlParlamentarier: number = 6;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

  goToQuest21Feedback2(): void {
    this.router.navigateByUrl('/quest21feedback2');
  }

}
