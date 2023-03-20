import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest22feedback1',
  templateUrl: './quest22feedback1.component.html',
  styleUrls: ['./quest22feedback1.component.scss'],
})
export class Quest22feedback1Component implements OnInit {

  quest2_2: string = 'gold';
  anzahlPunkte: number = 9;
  anzahlParlamentarier: number = 6;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

  goToQuest22Feedback2(): void {
    this.router.navigateByUrl('/quest22feedback2');
  }

}
