import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest11',
  templateUrl: './quest11.component.html',
  styleUrls: ['./quest11.component.scss'],
})
export class Quest11Component implements OnInit {

  droparea1:number = 1;
  droparea2:number = 0;
  droparea3:number = 0;
  droparea4:number = 1;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }
}
