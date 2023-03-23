import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quest11',
  templateUrl: './quest11.component.html',
  styleUrls: ['./quest11.component.scss'],
})
export class Quest11Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToQuest11feedback1(): void {
    this.router.navigateByUrl('/quest11feedback1');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum2(): void {
    this.router.navigateByUrl('/impressum2');
  }
}
