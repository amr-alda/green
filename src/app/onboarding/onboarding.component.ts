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
  
  showForm:boolean = true;

  showImg1:boolean = true;

  showImg2:boolean = false;

  showImg3:boolean = false;
  
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
      .rest(1500)
      .queueClearText()
      .type('Der Wissenschaftliche Dienst versorgt die 705 Abgeordneten des Europäischen Parlaments mit Analysen sowie Studien und unterstützt sie damit bei ihrer politischen Arbeit.')
      .rest(1500)
      .queueClearText()
      .type('Aktuell kümmere ich mich um ein in Planung befindliches Förderprogramm namens "Green European Tourism".')
      .rest(1500)
      .queueClearText()
      .type('Dieses zielt darauf ab, nachhaltige Tourismusprojekte in der Europäischen Union finanziell zu unterstützen.')
      .rest(1500)
      .queueClearText()
      .type('Beispiele für solche Projekte wären der Aufbau umweltfreundlicher Unterkünfte oder die Entwicklung sowie Umsetzung von Konzepten für einen möglichst emissionarmen Transport von Touristen.')
      .rest(1500)
      .queueClearText()
      .type('Naturparks, die den Erhalt von Flora und Fauna fördern und gleichzeitig Besuchern einzigartige Erlebnisse in der Natur ermöglichen, fallen auch in das Förderprogramm.')
      .rest(1500)
      .queueClearText()
      .type('In ein paar Wochen werden die Abgeordneten im Europäischen Parlament darüber abstimmen, ob das Förderprogramm in die Tat umgesetzt wird.')
      .rest(1500)
      .queueClearText()
      .type('Wir sollten also künftig gemeinsam daran arbeiten, möglichst viele der 705 Parlamentarier vom "Green European Tourism" zu überzeugen.')
      .rest(1500)
      .queueClearText()
      .type('Bald kommen einige Aufgaben auf dich zu.')
      .rest(1500)
      .queueClearText()
      .type('Mit jeder Aufgabe, die du erfolgreich meisterst, werden wir weitere Abgeordnete davon überzeugen können, für das Förderprogramm zu stimmen.')
      .rest(1500)
      .queueClearText()
      .type('Außerdem sammelst du mit der Zeit Erfahrungen und kannst vom Praktikanten zum wissenschaftlichen Projektleiter aufsteigen.')
      .rest(1500)
      .queueClearText()
      .type('Je besser wiederum dein Status ist, desto mehr Parlamentarier wirst du mit jeder gelösten Aufgabe überzeugen können.')
      .rest(1500)
      .queueClearText()
      .type('Also strenge dich an, damit der Tourismus in Europa künftig nachhaltiger wird.')
      .start()

      

  setTimeout(() => this.backgroundImg = '../../assets/images/lara-office2.png', 26000 );
  setTimeout(() => this.showForm = true, 26000 );
  setTimeout(() => this.showImg1 = true, 26000 );

  setTimeout(() => this.showImg1 = false, 54000 );
  setTimeout(() => this.showImg2 = true, 54000 );

  setTimeout(() => this.showImg2 = false, 106500 );
  setTimeout(() => this.showImg3 = true, 106500 );


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

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

}
