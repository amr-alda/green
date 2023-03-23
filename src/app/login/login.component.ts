import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToImpressum(): void {
    this.router.navigateByUrl('/impressum');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  goToNewPassword(): void {
    this.router.navigateByUrl('/newpassword');
  }

  goToOnboarding(): void {
    this.router.navigateByUrl('/onboarding');
  }
}
