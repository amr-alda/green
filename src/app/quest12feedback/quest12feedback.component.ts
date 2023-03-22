import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest12feedback',
  templateUrl: './quest12feedback.component.html',
  styleUrls: ['./quest12feedback.component.scss'],
})
export class Quest12feedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome(): void{
    this.router.navigateByUrl('/home');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

}
