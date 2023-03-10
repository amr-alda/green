import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username:string = "Name";
  gender:string = "female";

  showSettings:boolean = false;

  player_rank:number = 1;
  parlament_progress = 30;  

  modul1_percent:number = 100;
  modul2_percent:number = 0;
  modul3_percent:number = 0;
  modul4_percent:number = 0;

  modul2_locked: boolean = false;
  modul3_locked: boolean = true;
  modul4_locked: boolean = true;
  
  quest1_1: string = 'gold';
  quest1_2: string = 'bronze';

  quest2_1: string = 'grey';
  quest2_2: string = 'grey';
  quest2_3: string = 'grey';
  quest2_4: string = 'grey';

  quest3_1: string = 'grey';
  quest3_2: string = 'grey';
  quest3_3: string = 'grey';
  quest3_4: string = 'grey';

  quest4_1: string = 'grey';
  quest4_2: string = 'grey';
  quest4_3: string = 'grey';
  quest4_4: string = 'grey';

  formModal: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSettings(): void {
    this.router.navigateByUrl('/settings');
  }

  goToModul1(): void {
    this.router.navigateByUrl('/modul1');
  }

  goToModul2(): void {
    if (this.modul2_locked == false) {
      this.router.navigateByUrl('/modul2');
    }
  }

  goToModul3(): void {
    if (this.modul2_locked == false) {
      this.router.navigateByUrl('/modul3');
    }
  }

  goToModul4(): void {
    if (this.modul2_locked == false) {
      this.router.navigateByUrl('/modul4');
    }
  }

  goToFeedback(): void {
    this.router.navigateByUrl('/feedback');
  }

  goToLogin(): void {
    if (confirm('Sind sie sicher dass sie sich ausloggen wollen?')) {
      this.router.navigateByUrl('/login');
    }
  }

  isIn10Range(parlament_progress:number){
    if(parlament_progress>=10 && parlament_progress <20){
      return true;
    }
    return false;
  }

  isIn20Range(parlament_progress:number){
    if(parlament_progress>=20 && parlament_progress <30){
      return true;
    }
    return false;
  }

  isIn30Range(parlament_progress:number){
    if(parlament_progress>=30 && parlament_progress <40){
      return true;
    }
    return false;
  }
  
  isIn40Range(parlament_progress:number){
    if(parlament_progress>=40 && parlament_progress <50){
      return true;
    }
    return false;
  }

  isIn50Range(parlament_progress:number){
    if(parlament_progress>=50 && parlament_progress <60){
      return true;
    }
    return false;
  }

  isIn60Range(parlament_progress:number){
    if(parlament_progress>=60 && parlament_progress <70){
      return true;
    }
    return false;
  }

  isIn70Range(parlament_progress:number){
    if(parlament_progress>=70 && parlament_progress <80){
      return true;
    }
    return false;
  }

  isIn80Range(parlament_progress:number){
    if(parlament_progress>=80 && parlament_progress <90){
      return true;
    }
    return false;
  }

  isIn90Range(parlament_progress:number){
    if(parlament_progress>=90 && parlament_progress <100){
      return true;
    }
    return false;
  }

  isIn100Range(parlament_progress:number){
    if(parlament_progress==100){
      return true;
    }
    return false;
  }

  setGenderToMale(): void {
    this.gender = 'male';
  }

  setGenderToFemale(): void {
    this.gender = 'female';
  }

  showSettingsToggle(): void {
    if(this.showSettings == false){
      this.showSettings = true;
    }
    else{
      this.showSettings = false;
    }
  }
}
