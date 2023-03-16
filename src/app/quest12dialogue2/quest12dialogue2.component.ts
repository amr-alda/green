import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest12dialogue2',
  templateUrl: './quest12dialogue2.component.html',
  styleUrls: ['./quest12dialogue2.component.scss'],
})
export class Quest12dialogue2Component implements OnInit {

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
      .type('Hmm...')
      .rest(1500)
      .queueClearText()
      .type('Die Bewerbung von Lisa Nowak kommt mir irgendwie seltsam vor.')
      .rest(1500)
      .queueClearText()
      .type('Wieso bewirbt sich jemand auf die Stelle, der so gar keine Ahnung vom wissenschaftlichen Arbeiten hat.')
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

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

}
