import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul2feedback',
  templateUrl: './modul2feedback.component.html',
  styleUrls: ['./modul2feedback.component.scss'],
})
export class Modul2feedbackComponent implements OnInit {

  quest21_locked: boolean = false;
  quest22_locked: boolean = false;
  quest23_locked: boolean = true;
  quest24_locked: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {}

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

  goToQuest21feedback() :void{
    this.router.navigateByUrl('/quest21feedback');
  }

  goToQuest22feedback() :void{
    this.router.navigateByUrl('/quest22feedback');
  }

  goToQuest23feedback2() :void{
    if(this.quest23_locked == false){
      this.router.navigateByUrl('/quest23feedback2');
    }
  }

  goToQuest24feedback2() :void{
    if(this.quest24_locked == false){
    this.router.navigateByUrl('/quest24feedback2');
    }
  }
}
