import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-onboarding4',
  templateUrl: './onboarding4.component.html',
  styleUrls: ['./onboarding4.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class Onboarding4Component implements OnInit {

  showForm: boolean = true;

  showImg3: boolean = true;

  backgroundImg: string =
    '../../assets/images/Lauras-BüroOnboarding4-Parlamentarier.png';

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
        'In ein paar Wochen werden die Abgeordneten im Europäischen Parlament darüber abstimmen, ob das Förderprogramm in die Tat umgesetzt wird.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Wir sollten also künftig gemeinsam daran arbeiten, möglichst viele der 705 Parlamentarier vom "Green European Tourism" zu überzeugen.'
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
      this.router.navigate(['/onboarding4'])
    });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToOnboarding5(): void {
    this.router.navigateByUrl('/onboarding5');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}

