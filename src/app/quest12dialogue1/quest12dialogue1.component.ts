import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest12dialogue1',
  templateUrl: './quest12dialogue1.component.html',
  styleUrls: ['./quest12dialogue1.component.scss'],
})
export class Quest12dialogue1Component implements OnInit {
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
        'Wir wollen neues Personal einstellen und haben eine Stelle für Wissenschaftskommunikation ausgeschrieben.'
      )
      .rest(1500)
      .queueClearText()
      .type('Um ihre Komptenzen für diesen Job unter Beweis zu stellen, sollten die Bewerberinnen und Bewerber auch einen kurzen Text zum Thema "Klimawandel und Tourismus" verfassen.')
      .rest(1500)
      .queueClearText()
      .type(
        'Würdest du bitte die von Marianne Weber, Mike Kramer und Lisa Nowak eingereichten Texte anhand unserer Anforderungskriterien zum wissenschaftlichen Arbeiten prüfen?'
      )
      .start();
  }

  reload() {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/quest12dialogue1'])
  });
  }

  goToQuest12(): void {
    this.router.navigateByUrl('/quest12');
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
