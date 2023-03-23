import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest11feedback2',
  templateUrl: './quest11feedback2.component.html',
  styleUrls: ['./quest11feedback2.component.scss'],
})
export class Quest11feedback2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest11Dialogue2(): void {
    this.router.navigateByUrl('/quest11dialogue2');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
