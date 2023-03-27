import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-onboarding2',
  templateUrl: './onboarding2.component.html',
  styleUrls: ['./onboarding2.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class Onboarding2Component implements OnInit {

  showForm: boolean = true;

  showImg1: boolean = true;

  backgroundImg: string =
  '../../assets/images/Lauras-BüroOnboarding2-EU-Flagge.png';

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
        'Ich brauche deine Hilfe vor allem bei meiner Tätigkeit als Beraterin des Wissenschaftlichen Dienstes des Parlaments der Europäischen Union.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Der Wissenschaftliche Dienst versorgt die 705 Abgeordneten des Europäischen Parlaments mit Analysen sowie Studien und unterstützt sie damit bei ihrer politischen Arbeit.'
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
      this.router.navigate(['/onboarding2'])
    });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToOnboarding3(): void {
    this.router.navigateByUrl('/onboarding3');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
