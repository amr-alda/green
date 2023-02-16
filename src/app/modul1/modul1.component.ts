import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {
  quest1_1:string = 'grey' 
  quest1_2:string = 'grey'

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome():void{
    this.router.navigateByUrl('/home');
  }

}
