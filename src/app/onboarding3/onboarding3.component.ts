import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-onboarding3',
  templateUrl: './onboarding3.component.html',
  styleUrls: ['./onboarding3.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class Onboarding3Component implements OnInit {

  showForm: boolean = true;

  showImg2: boolean = true;

  backgroundImg: string =
    '../../assets/images/Lauras-BüroOnboarding3-GreenTourismLogo.png';

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
        'Aktuell kümmere ich mich um ein in Planung befindliches Förderprogramm namens "Green European Tourism".'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Dieses zielt darauf ab, nachhaltige Tourismusprojekte in der Europäischen Union finanziell zu unterstützen.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Beispiele für solche Projekte wären der Aufbau umweltfreundlicher Unterkünfte oder die Entwicklung sowie Umsetzung von Konzepten für einen möglichst emissionarmen Transport von Touristen.'
      )
      .rest(1500)
      .queueClearText()
      .type(
        'Naturparks, die den Erhalt von Flora und Fauna fördern und gleichzeitig Besuchern einzigartige Erlebnisse in der Natur ermöglichen, fallen auch in das Förderprogramm.'
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
      this.router.navigate(['/onboarding3'])
    });
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToOnboarding4(): void {
    this.router.navigateByUrl('/onboarding4');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
