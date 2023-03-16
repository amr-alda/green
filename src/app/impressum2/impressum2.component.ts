import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressum2',
  templateUrl: './impressum2.component.html',
  styleUrls: ['./impressum2.component.scss'],
})
export class Impressum2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

}
