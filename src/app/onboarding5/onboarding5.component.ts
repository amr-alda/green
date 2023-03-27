import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-onboarding5',
  templateUrl: './onboarding5.component.html',
  styleUrls: ['./onboarding5.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class Onboarding5Component implements OnInit {

  showForm: boolean = true;

  Rang1: boolean = true;

  backgroundImg: string =
    '../../assets/images/Lauras-BüroOnboarding5-Rang_Erklaerung.png';

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
      .type('Bald kommen einige Aufgaben auf dich zu.')
      .rest(1500)
      .queueClearText()
      .type(
        'Mit jeder Aufgabe, die du erfolgreich meisterst, werden wir weitere Abgeordnete davon überzeugen können, für das Förderprogramm zu stimmen.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Außerdem sammelst du mit der Zeit Erfahrungen und kannst vom Praktikanten zum wissenschaftlichen Projektleiter aufsteigen.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Je besser wiederum dein Status ist, desto mehr Parlamentarier wirst du mit jeder gelösten Aufgabe überzeugen können.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Also strenge dich an, damit der Tourismus in Europa künftig nachhaltiger wird.'
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

  reload() {
    this.router.navigate(['/'])
    .then(() => {
      this.router.navigate(['/onboarding5'])
    });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
