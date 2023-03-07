import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest22dialogue1',
  templateUrl: './quest22dialogue1.component.html',
  styleUrls: ['./quest22dialogue1.component.scss'],
})
export class Quest22dialogue1Component implements OnInit {

  constructor(private router: Router) { }

  i = 0;

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
      .type('Oh Mann, das geht ja gut los.')
      .rest(1500)
      .queueClearText()
      .type('Ich war gerade in der Mensa mir einen Kaffee holen.')
      .rest(1500)
      .queueClearText()
      .type('Ich hatte mein Büro offengelassen und als ich zurückkam, war plötzlich ein ziemliches Chaos.')
      .rest(1500)
      .queueClearText()
      .type('Ich kann mir ehrlich gesagt nicht erklären, wie das passieren konnte!?')
      .rest(1500)
      .queueClearText()
      .type('Leider wurden auf dem Schreibtisch auch meine ganzen Unterlagen zum wissenschaftlichen Arbeiten durcheinandergebracht.')
      .rest(1500)
      .queueClearText()
      .type('Hilf mir bitte, die Unterlagen zu ordnen. Ich brauche sie für meine Vorlesung, die in 15 Minuten stattfindet.')
      .rest(1500)
      .start()

  }



  higheri(){
    this.i++;

    if(this.i==1) {

      const target1 = document.querySelector('.tw');

      const writer1 = new Typewriter(target1, {
        typeColor: 'white',
        cursorColor: 'white'
      })

      writer1
        .clear()
        .start()

    }

  }

  writer1(){
    this.i = 0;

    window.location.reload();
  }

  goToQuest11(): void {
    this.router.navigateByUrl('/quest11');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

}
