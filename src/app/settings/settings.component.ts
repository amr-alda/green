import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  gender:string = "female"

  setGenderToMale(): void {
    this.gender = 'male';
  }

  setGenderToFemale(): void {
    this.gender = 'female';
  }

  constructor(private router: Router) { }

  ngOnInit() {}

  

}
