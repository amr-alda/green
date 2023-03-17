import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest21',
  templateUrl: './quest21.component.html',
  styleUrls: ['./quest21.component.scss'],
})
export class Quest21Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest21feedback1(): void{
    this.router.navigateByUrl('/quest21feedback1');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
