import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-quest12',
  templateUrl: './quest12.component.html',
  styleUrls: ['./quest12.component.scss'],
})
export class Quest12Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

  goToText1(): void {
    this.router.navigateByUrl('/text1');
  }

  goToText2(): void {
    this.router.navigateByUrl('/text2');
  }

  goToText3(): void {
    this.router.navigateByUrl('/text3');
  }

  determining() {
    var result = 0;
    console.log('ich bin vor der Kotrolle');
    console.log(result);

    const value1 = (document.getElementById('T1K1') as HTMLInputElement | null)?.value;
    const value2 = (document.getElementById('T1K2') as HTMLInputElement | null)?.value;
    const value3 = (document.getElementById('T1K3') as HTMLInputElement | null)?.value;
    const value4 = (document.getElementById('T1K4') as HTMLInputElement | null)?.value;
    const value5 = (document.getElementById('T1K5') as HTMLInputElement | null)?.value;
    const value6 = (document.getElementById('T2K1') as HTMLInputElement | null)?.value;
    const value7 = (document.getElementById('T2K2') as HTMLInputElement | null)?.value;
    const value8 = (document.getElementById('T2K3') as HTMLInputElement | null)?.value;
    const value9 = (document.getElementById('T2K4') as HTMLInputElement | null)?.value;
    const value10 = (document.getElementById('T2K5') as HTMLInputElement | null)?.value;
    const value11 = (document.getElementById('T3K1') as HTMLInputElement | null)?.value;
    const value12 = (document.getElementById('T3K2') as HTMLInputElement | null)?.value;
    const value13 = (document.getElementById('T3K3') as HTMLInputElement | null)?.value;
    const value14 = (document.getElementById('T3K4') as HTMLInputElement | null)?.value;
    const value15 = (document.getElementById('T3K5') as HTMLInputElement | null)?.value;

    for(var i = 0; i <=15; i++) {
      if(value1 == 'fulfilled' && i == 1) {
       result++;
       console.log('Ergebniss nach 1:');
       console.log(result);
     }
      if(value2 == 'fulfilled' && i == 2) {
        result++;
       console.log('Ergebniss nach 2:');
        console.log(result);
      }
      if(value3 == 'fulfilled' && i == 3) {
        result++;
        console.log('Ergebniss nach 3:');
        console.log(result);
      }
      if(value4 == 'fulfilled'&& i == 4) {
        result++;
        console.log('Ergebniss nach 4:');
        console.log(result);
      }
      if(value5 == 'fulfilled'&& i == 5) {
        result++;
        console.log('Ergebniss nach 5:');
        console.log(result);
      }
      if(value6 == 'fulfilled'&& i == 6) {
        result++;
        console.log('Ergebniss nach 6:');
        console.log(result);
      }
      if(value7 == 'notfulfilled'&& i == 7) {
        result++;
        console.log('Ergebniss nach 7:');
        console.log(result);
      }
      if(value8 == 'fulfilled'&& i == 8) {
        result++;
        console.log('Ergebniss nach 8:');
        console.log(result);
      }
      if(value9 == 'notfulfilled'&& i == 9) {
        result++;
        console.log('Ergebniss nach 9:');
        console.log(result);
      }
      if(value10 == 'fulfilled'&& i == 10) {
        result++;
        console.log('Ergebniss nach 10:');
        console.log(result);
      }
      if(value11 == 'notfulfilled'&& i == 11) {
        result++;
        console.log('Ergebniss nach 11:');
        console.log(result);
      }
      if(value12 == 'notfulfilled'&& i == 12) {
        result++;
        console.log('Ergebniss nach 12:');
        console.log(result);
      }
      if(value13 == 'notfulfilled'&& i == 13) {
        result++;
        console.log('Ergebniss nach 13:');
        console.log(result);
      }
      if(value14 == 'notfulfilled'&& i == 14) {
         result++;
        console.log('Ergebniss nach 14:');
        console.log(result);
      }
      if(value15 == 'notfulfilled'&& i == 15) {
        result++;
        console.log('Ergebniss nach 15:');
        console.log(result);
      }
   }
    var points = 10*(((100/15)*result)/100);
    console.log('Punkte von Quest 1.2:');
    console.log(points);
  }
}
