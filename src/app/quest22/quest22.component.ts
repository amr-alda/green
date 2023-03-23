import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest22',
  templateUrl: './quest22.component.html',
  styleUrls: ['./quest22.component.scss'],
})
export class Quest22Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest22feedback1(): void {
    this.router.navigateByUrl('/quest22feedback1');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }
}
