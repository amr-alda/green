import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quest11feedback1',
  templateUrl: './quest11feedback1.component.html',
  styleUrls: ['./quest11feedback1.component.scss'],
})
export class Quest11feedback1Component implements OnInit {

  quest1_1: string = 'gold';
  anzahlPunkte: number = 9;
  anzahlParlamentarier: number = 6;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

}
