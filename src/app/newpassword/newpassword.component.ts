import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss'],
})
export class NewpasswordComponent implements OnInit {
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

  goToNewPassword(): void {
    this.router.navigateByUrl('/newpassword');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
