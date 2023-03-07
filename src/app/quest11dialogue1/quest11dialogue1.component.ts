import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest11dialogue1',
  templateUrl: './quest11dialogue1.component.html',
  styleUrls: ['./quest11dialogue1.component.scss'],
})
export class Quest11dialogue1Component implements OnInit {

  constructor(private router: Router) { }

  i = 0;

  ngOnInit() {
    const target = document.querySelector('.tw');

    const start = new Typewriter(target, {
      typeColor: 'white',
      cursorColor: 'white',
      loop: false,
    })

    start
      .clear()
      .type('Hallo, ich bin writer1.')
      .addCursor()
      .rest(1500)
      .clear()
      .type('Hallo, ich bin writer2.')
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
