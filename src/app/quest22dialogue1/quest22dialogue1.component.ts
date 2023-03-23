import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest22dialogue1',
  templateUrl: './quest22dialogue1.component.html',
  styleUrls: ['./quest22dialogue1.component.scss'],
})
export class Quest22dialogue1Component implements OnInit {
  constructor(private router: Router) {}

  i = 0;

  ngOnInit() {
    const target = document.querySelector('.tw');

    const start = new Typewriter(target, {
      typeColor: 'white',
      cursorColor: 'white',
      loop: false,
      deleteSpeed: 5,
      animateCursor: false,
      typeSpeed: 75,
    });

    start
      .removeCursor()
      .type('Das kann doch nicht wahr sein!')
      .rest(1500)
      .queueClearText()
      .type(
        'Mir wurde gerade mitgeteilt, dass wohl unsere Internetseite mit der Übersicht über die einzelnen Arten wissenschaftlicher Literatur gehackt wurde.'
      )
      .rest(1500)
      .queueClearText()
      .type('Jetzt ist dort alles durcheinanander geraten.')
      .rest(1500)
      .queueClearText()
      .type(
        'Kannst du das bitte schnell wieder ordnen und die richtigen Lösungen an das Rechenzentrum schicken, damit das dort korrigiert werden kann.'
      )
      .start();
  }

  higheri() {
    this.i++;

    if (this.i == 1) {
      const target1 = document.querySelector('.tw');

      const writer1 = new Typewriter(target1, {
        typeColor: 'white',
        cursorColor: 'white',
      });

      writer1.clear().start();
    }
  }

  writer1() {
    this.i = 0;

    window.location.reload();
  }

  goToQuest22(): void {
    this.router.navigateByUrl('/quest22');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
