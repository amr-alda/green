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
  standalone: true
})
export class OnboardingComponent implements OnInit {

  
  backgroundImg : string =  '../../assets/images/elfriede.png';

  constructor(private router: Router) { }

  ngOnInit() {


    const target = document.querySelector('.tw');

    const start = new Typewriter(target, {
      typeColor: 'white',
      cursorColor: 'white',
      loop: false,
      deleteSpeed: 5,
      animateCursor: false,
      typeSpeed: 75
    })

    start
      .removeCursor()
      .type('Hallo Name, mein Name ist Laura Kraft.')
      .rest(1500)
      .queueClearText()
      .type('Ich bin Professorin für „Nachhaltigen Tourismus“ und kümmere mich außerdem um die wissenschaftliche Ausbildung unserer Studierenden.')
      .rest(1500)
      .queueClearText()
      .type('Ich freue mich, dass du mich in den kommenden Wochen bei meiner Arbeit unterstützen wirst.')
      .rest(1500)
      .queueClearText()
      .type('Ich brauche deine Hilfe vor allem bei meiner Tätigkeit als Beraterin des Wissenschaftlichen Dienstes des Parlaments der Europäischen Union.')
      .start()

      

  setTimeout(() => this.backgroundImg = '../../assets/images/lara-office2.png', 26000 );

  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

  goToQuest11Feedback2(): void {
    this.router.navigateByUrl('/quest11feedback2');
  }

  writer1(){

    window.location.reload();
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

}
