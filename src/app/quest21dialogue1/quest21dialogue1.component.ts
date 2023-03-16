import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-quest21dialogue1',
  templateUrl: './quest21dialogue1.component.html',
  styleUrls: ['./quest21dialogue1.component.scss'],
})
export class Quest21dialogue1Component implements OnInit {

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
      .type('Ich war heute morgen wieder in der Mensa, um mir einen Kaffee zu holen.')
      .rest(1500)
      .queueClearText()
      .type('Keine Angst, dieses Mal hatte ich mein Büro abgeschlossen.')
      .rest(1500)
      .queueClearText()
      .type('Dafür wurde ich am Kaffeeautomaten negativ überrascht.')
      .rest(1500)
      .queueClearText()
      .type('Dort lagen überall Zettel mit ziemlich unsinnigen Tipps zum Umgang mit wissenschaftlicher Literatur herum.')
      .rest(1500)
      .queueClearText()
      .type('Ich habe sie eingesammelt, um sie zu entsorgen.')
      .rest(1500)
      .queueClearText()
      .type('Dummerweise sind sie mit meinen eigenen Hinweisen zur Literaturarbeit durcheinandergeraten.')
      .rest(1500)
      .queueClearText()
      .type('Könntest du bitte die schlechten Beispiele heraussuchen und vernichten?')
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

  goToQuest21(): void {
    this.router.navigateByUrl('/quest21');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }  

}
