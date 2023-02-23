import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-quest11',
  templateUrl: './quest11.component.html',
  styleUrls: ['./quest11.component.scss'],
})
export class Quest11Component implements OnInit {

  droparea1:number = 1;
  droparea2:number = 0;
  droparea4:number = 0;
  droparea5:number = 0;

  box1:any = [
  
  ];

  box2:any = [
    
  ];

  box3:any = [
    "Text1",
    "Text2",
    "Text3",
    "Text4",
    "Text5",
    "Text6",
    "Text7",
    "Text8",
    "Text9",
    "Text10",
    "Text11",
    "Text12",
  ];

  box4:any = [
    
  ];

  box5:any = [
    
  ];

  onDrop(event: CdkDragDrop<string []>){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      } else{
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }


  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }
}
