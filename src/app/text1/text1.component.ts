import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text1',
  templateUrl: './text1.component.html',
  styleUrls: ['./text1.component.scss'],
})
export class Text1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
