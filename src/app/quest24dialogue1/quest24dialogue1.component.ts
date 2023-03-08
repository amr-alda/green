import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest24dialogue1',
  templateUrl: './quest24dialogue1.component.html',
  styleUrls: ['./quest24dialogue1.component.scss'],
})
export class Quest24dialogue1Component implements OnInit {

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
      .type('Oh nein!')
      .rest(1500)
      .queueClearText()
      .type('Unsere Gegner haben sich ins Trainingscamp geschlichen und haben unsere Quellen durcheinandergebracht!')
      .rest(1500)
      .queueClearText()
      .type('Sie alle wiederzufinden, schaffen wir niemals allein.')
      .rest(1500)
      .queueClearText()
      .type('Ich glaube, wir müssen uns mit allen Mitgliedern des Trainingscamps versammeln!')
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
