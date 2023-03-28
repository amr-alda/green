import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest23dialogue1',
  templateUrl: './quest23dialogue1.component.html',
  styleUrls: ['./quest23dialogue1.component.scss'],
})
export class Quest23dialogue1Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const target = document.querySelector('.tw');

    const start = new Typewriter(target, {
      typeColor: 'white',
      cursorColor: 'white',
      loop: false,
      deleteSpeed: 5,
      animateCursor: false,
      typeSpeed: 65,
    });

    start
      .removeCursor()
      .type(
        'Die Mitarbeiter vom Wissenschaftlichen Dienst des Europäischen Parlamentes haben einen kurzen Text für die Abgeordneten des Europäischen Parlaments über das zu fördernde Projekt des „Green European Tourism“ erstellt.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Leider enthält der Text noch mehrere Zitierfehler. Würdest du den Text bitte für mich korrigieren?'
      )
      .start();
  }

  reload() {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/quest23dialogue1'])
  });
  }

  goToQuest11(): void {
    this.router.navigateByUrl('/quest11');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
