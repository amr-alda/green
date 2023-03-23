import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest21feedback2',
  templateUrl: './quest21feedback2.component.html',
  styleUrls: ['./quest21feedback2.component.scss'],
})
export class Quest21feedback2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest21Dialogue2(): void {
    this.router.navigateByUrl('/quest21dialogue2');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
