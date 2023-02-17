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

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToModul2(): void {
    this.router.navigateByUrl('/modul2');
  }
}
