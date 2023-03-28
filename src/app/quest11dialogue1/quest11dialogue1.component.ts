import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest11dialogue1',
  templateUrl: './quest11dialogue1.component.html',
  styleUrls: ['./quest11dialogue1.component.scss'],
})
export class Quest11dialogue1Component implements OnInit {
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
      .type('Oh Mann, das geht ja gut los. Ich war gerade in der Mensa mir einen Kaffee holen.')
      .rest(1500)
      .queueClearText()
      .type('Ich hatte mein Büro offengelassen und als ich zurückkam, war plötzlich ein ziemliches Chaos.')
      .rest(1500)
      .queueClearText()
      .type(
        'Ich kann mir ehrlich gesagt nicht erklären, wie das passieren konnte!?'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Leider wurden auf dem Schreibtisch auch meine ganzen Unterlagen zum wissenschaftlichen Arbeiten durcheinandergebracht.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Hilf mir bitte, die Unterlagen zu ordnen. Ich brauche sie für meine Vorlesung, die in 15 Minuten stattfindet.'
      )
      .rest(1500)
      .start();
  }

  reload() {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/quest11dialogue1'])
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

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
