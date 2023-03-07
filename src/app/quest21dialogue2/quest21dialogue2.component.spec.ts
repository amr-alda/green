import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quest21dialogue2Component } from './quest21dialogue2.component';

describe('Quest21dialogue2Component', () => {
  let component: Quest21dialogue2Component;
  let fixture: ComponentFixture<Quest21dialogue2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Quest21dialogue2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quest21dialogue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
