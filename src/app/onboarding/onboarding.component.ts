import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class OnboardingComponent implements OnInit {

  backgroundImg: string =
    '../../assets/images/Lauras-BüroOnboarding1-Begrüßung.png';

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
      .type('Hallo Jannes, mein Name ist Laura Kraft.')
      .rest(1500)
      .queueClearText()
      .type(
        'Ich bin Professorin für „Nachhaltigen Tourismus“ und kümmere mich außerdem um die wissenschaftliche Ausbildung unserer Studierenden.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Ich freue mich, dass du mich in den kommenden Wochen bei meiner Arbeit unterstützen wirst.'
      )
      .start();
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToQuest11Feedback2(): void {
    this.router.navigateByUrl('/quest11feedback2');
  }

  reload() : void {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/onboarding'])
  });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToOnboarding2(): void {
    this.router.navigateByUrl('/onboarding2');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
