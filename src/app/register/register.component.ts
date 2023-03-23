import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  goToImpressum(): void {
    this.router.navigateByUrl('/impressum');
  }

  goToOnboarding(): void {
    this.router.navigateByUrl('/onboarding');
  }
}
