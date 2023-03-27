import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characterselection',
  templateUrl: './characterselection.component.html',
  styleUrls: ['./characterselection.component.scss'],
})
export class CharacterselectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  maleSelected:boolean = false;
  femaleSelected:boolean = false;

  goToOnboarding(): void {
    this.router.navigateByUrl('/onboarding');
  }

  toggleMaleAvatar():void{
    if(this.maleSelected == false){
      this.maleSelected = true;
      this.femaleSelected = false;
    }
    else{
      this.maleSelected = false;
      this.femaleSelected = false;
    }
  }

  toggleFemaleAvatar():void{
    if(this.femaleSelected == false){
      this.femaleSelected = true;
      this.maleSelected = false;
    }
    else{
      this.femaleSelected = false;
      this.maleSelected = false;
    }
  }


}
