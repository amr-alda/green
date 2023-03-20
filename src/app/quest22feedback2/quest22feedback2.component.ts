import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest22feedback2',
  templateUrl: './quest22feedback2.component.html',
  styleUrls: ['./quest22feedback2.component.scss'],
})
export class Quest22feedback2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToQuest22Dialogue2(): void{
    this.router.navigateByUrl('/quest22dialogue2');
  }

}
