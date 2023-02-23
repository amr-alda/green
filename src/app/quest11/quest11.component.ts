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

  box1:any = [];
  box2:any = [];
  box3:any = [
    "Erarbeitung von Ansätzen zur Vermeidung von Overtourism",
    "Veranstaltungsteilnehmer",
    "Literaturrecherchen",
    "Reiseveranstalter",
    "Durchführung von Befragungen",
    "Untersuchung der Erfolgsdeterminanten der Social-Media-Kommunikation von Bio-Hotels",
    "Auswertung statistischer Daten",
    "Darstellung von Methoden der Preisbestimmung für hybride Kongresse",
    "Destinationsmanagementorganisation",
    "Beschreibung von Möglichkeiten zur Senkung des Ausstoßes klimaschädlicher Gase bei Geschäftsreisen",
    "Analyse von Ursachen des Overtourism",
    "Bestimmung der Einflussfaktoren des Beschwerdeverhaltens von Flugreisenden",
  ];
  box4:any = [];
  box5:any = [];

  get isbox1Available(): boolean {
    return this.box1 && this.box1.length < 3;
  }
  box1Predicate = (): boolean => {
  return this.isbox1Available;
  }

  get isbox2Available(): boolean {
    return this.box2 && this.box2.length < 3;
  }
  box2Predicate = (): boolean => {
  return this.isbox2Available;
  }

  get isbox4Available(): boolean {
    return this.box4 && this.box4.length < 3;
  }
  box4Predicate = (): boolean => {
  return this.isbox4Available;
  }

  get isbox5Available(): boolean {
    return this.box5 && this.box5.length < 3;
  }
  box5Predicate = (): boolean => {
  return this.isbox5Available;
  }

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
