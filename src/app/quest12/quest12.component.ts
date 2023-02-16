import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest12',
  templateUrl: './quest12.component.html',
  styleUrls: ['./quest12.component.scss'],
})
export class Quest12Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome():void{
    this.router.navigateByUrl('/home');
  }

  goToModul1():void{
    this.router.navigateByUrl('/modul1');
  }

}
