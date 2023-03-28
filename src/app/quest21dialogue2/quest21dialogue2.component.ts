import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest21dialogue2',
  templateUrl: './quest21dialogue2.component.html',
  styleUrls: ['./quest21dialogue2.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class Quest21dialogue2Component implements OnInit {
  backgroundImg: string = '../../assets/images/Lauras-BüroQuest2.1.1Outro.png';

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
      .type('Danke für deine Hilfe!')
      .rest(1500)
      .queueClearText()
      .type('Ich frage mich dennoch, wie die Zettel wohl in die Mensa kamen?')
      .rest(1500)
      .queueClearText()
      .type(
        'Kaum auszumalen, wenn sich unsere Studierenden beim Verfassen ihrer wissenschaftlichen Texte nach diesem Unsinn gerichtet hätten.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Auf der Rückseite eines Zettel steht übrigens etwas, was ich aber nicht verstehe. Ich hefte das am besten mal an unsere Pinnwand.'
      )
      .start();

    setTimeout(
      () =>
        (this.backgroundImg =
          '../../assets/images/Lauras-BüroQuest2.1.2Outro.png'),
      3500
    );
  }

  reload() {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/quest21dialogue2'])
  });
  }

  goToQuest11(): void {
    this.router.navigateByUrl('/quest11');
  }

  goToModul2(): void {
    this.router.navigateByUrl('/modul2');
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
