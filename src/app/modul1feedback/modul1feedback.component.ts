import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modul1feedback',
  templateUrl: './modul1feedback.component.html',
  styleUrls: ['./modul1feedback.component.scss'],
})
export class Modul1feedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
