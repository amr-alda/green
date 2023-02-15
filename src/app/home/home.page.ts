import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modul2_locked:boolean = true;
  modul3_locked:boolean = true;
  modul4_locked:boolean = true;

  quest1_1:string = 'gold';
  quest1_2:string = 'bronze';

  quest2_1:string = 'grey';
  quest2_2:string = 'grey';
  quest2_3:string = 'grey';
  quest2_4:string = 'grey';

  quest3_1:string = 'grey';
  quest3_2:string = 'grey';
  quest3_3:string = 'grey';
  quest3_4:string = 'grey';

  quest4_1:string = 'grey';
  quest4_2:string = 'grey';
  quest4_3:string = 'grey';
  quest4_4:string = 'grey';

  constructor(private router: Router) {}

  goToModul1():void{
    this.router.navigateByUrl('/modul1');
  }

  goToModul2():void{
    this.router.navigateByUrl('/modul2');
  }

  goToModul3():void{
    this.router.navigateByUrl('/modul3');
  }

  goToModul4():void{
    this.router.navigateByUrl('/modul4');
  }

  goToFeedback():void{
    this.router.navigateByUrl('/feedback');
  }
  goToLogin():void{
    this.router.navigateByUrl('/login3');
  }

}
