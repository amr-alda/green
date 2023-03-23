import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest22dialogue2',
  templateUrl: './quest22dialogue2.component.html',
  styleUrls: ['./quest22dialogue2.component.scss'],
})
export class Quest22dialogue2Component implements OnInit {
  constructor(private router: Router) {}

  i = 0;

  ngOnInit() {
    const target = document.querySelector('.tw');

    const start = new Typewriter(target, {
      typeColor: 'white',
      cursorColor: 'white',
      loop: false,
      deleteSpeed: 5,
      animateCursor: false,
      typeSpeed: 75,
    });

    start
      .removeCursor()
      .type(
        'Das Rechenzentrum hat auf der gehackten Webseite übrigens eine ominöse Nachricht gefunden, die ich mal an die Pinnwand heften werde.'
      )
      .start();
  }

  higheri() {
    this.i++;

    if (this.i == 1) {
      const target1 = document.querySelector('.tw');

      const writer1 = new Typewriter(target1, {
        typeColor: 'white',
        cursorColor: 'white',
      });

      writer1.clear().start();
    }
  }

  writer1() {
    this.i = 0;

    window.location.reload();
  }

  goToModul2(): void {
    this.router.navigateByUrl('/modul2');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
