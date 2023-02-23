import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text2',
  templateUrl: './text2.component.html',
  styleUrls: ['./text2.component.scss'],
})
export class Text2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
