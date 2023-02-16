import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest24',
  templateUrl: './quest24.component.html',
  styleUrls: ['./quest24.component.scss'],
})
export class Quest24Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome():void{
    this.router.navigateByUrl('/home');
  }

  goToModul2():void{
    this.router.navigateByUrl('/modul2');
}

}
