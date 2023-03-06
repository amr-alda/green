import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-quest11',
  templateUrl: './quest11.component.html',
  styleUrls: ['./quest11.component.scss'],
})
export class Quest11Component implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

}
