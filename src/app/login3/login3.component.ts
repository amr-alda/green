import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.scss'],
})
export class Login3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome():void{    
    this.router.navigateByUrl('/home');
  }

}
