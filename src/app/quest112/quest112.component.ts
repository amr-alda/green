import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-quest112',
  templateUrl: './quest112.component.html',
  styleUrls: ['./quest112.component.scss'],
})
export class Quest112Component implements OnInit {

  droparea6:number = 0;
  droparea7:number = 0;
  droparea9:number = 0;
  droparea10:number = 0;

  box6:any = [];
  box7:any = [];
  box8:any = [
    "Die folgende Aussage ist ein Beispiel für eine Hypothese, eine Theorie, ein Modell oder ein Konzept?: Das Umweltbewusstsein einer Person wirkt sich positiv auf ihre Bereitschaft aus, umweltfreundliche Verkehrsträger zu nutzen.",
    "Ist eine vereinfachte Darstellung relevanter Teile der Realität.",
    "Sollte immer definiert werden, um ein einheitliches Begriffsverständnis zwischen Autor und Leser herzustellen.",
    "Setzt sich aus einer Menge von Aussagen (Hypothesen) zusammen, die systematisch in Beziehung zueinander stehen und die empirisch überprüft werden können.",
    "Die folgende Aussage ist ein Beispiel für eine Hypothese, eine Theorie, ein Modell oder ein Konzept?: Umweltbewusstsein wird definiert als die Einsicht einer Person in die Tatsache, dass Menschen die natürliche Umwelt und damit ihre eigenen Lebensgrundlagen durch ihr Handeln sowie Nicht-Handeln schädigen, verbunden mit der Bereitschaft, die Schädigungen zu minimieren.",
    "Die Erklärung des Ablaufs der Evolution nach Charles Darwin ist eine Beispiel für eine Hypothese, eine Theorie, ein Modell oder ein Konzept?",
    "Ist eine Spekulation, Annahme oder Vermutung, die sich noch nicht empirisch bewährt hat.",
    "Ist eine Abstraktion einer einzelnen, in der Realität vorhandenen Erscheinung",
    "Kann durch empirische Studien abgelehnt (falsifiziert) oder bestätigt (verifiziert) werden.",
    "Kann als Abbildung, als gegenständliches Modell oder Computersimulation dargestellt werden.",
    "Gilt als bewährt, wenn sie mehrfach empirisch geprüft wurde und somit bereits längere Zeit Bestand hat.",
    "In der Abbildung sind Hypothesen, Theorien, Modelle oder Konzepte dargestellt?" 
  ];
  box9:any = [];
  box10:any = [];

  get isbox6Available(): boolean {
    return this.box6 && this.box6.length < 3;
  }
  box6Predicate = (): boolean => {
  return this.isbox6Available;
  }

  get isbox7Available(): boolean {
    return this.box7 && this.box7.length < 3;
  }
  box7Predicate = (): boolean => {
  return this.isbox7Available;
  }

  get isbox9Available(): boolean {
    return this.box9 && this.box9.length < 3;
  }
  box9Predicate = (): boolean => {
  return this.isbox9Available;
  }

  get isbox10Available(): boolean {
    return this.box10 && this.box10.length < 3;
  }
  box10Predicate = (): boolean => {
  return this.isbox10Available;
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

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

}
