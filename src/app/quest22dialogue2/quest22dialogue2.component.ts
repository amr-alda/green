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
        'Das Rechenzentrum hat auf der gehackten Webseite übrigens eine ominöse Nachricht gefunden, die ich mal an die Pinnwand heften werde.'
      )
      .start();
  }

  reload() {
    this.router.navigate(['/'])
  .then(() => {
    this.router.navigate(['/quest22dialogue2'])
  });
  }

  goToModul2(): void {
    this.router.navigateByUrl('/modul2');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
