import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul2',
  templateUrl: './modul2.component.html',
  styleUrls: ['./modul2.component.scss'],
})
export class Modul2Component implements OnInit {
  quest1_1:string = 'grey' 
  quest1_2:string = 'grey'

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome():void{
    this.router.navigateByUrl('/home');
  }

  goToQuest21():void{
    this.router.navigateByUrl('/quest21');
}

goToQuest22():void{
  this.router.navigateByUrl('/quest22');
}

goToQuest23():void{
  this.router.navigateByUrl('/quest23');
}

goToQuest24():void{
this.router.navigateByUrl('/quest24');
}
}
