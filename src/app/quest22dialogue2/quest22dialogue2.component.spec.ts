import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quest22dialogue2Component } from './quest22dialogue2.component';

describe('Quest22dialogue2Component', () => {
  let component: Quest22dialogue2Component;
  let fixture: ComponentFixture<Quest22dialogue2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Quest22dialogue2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quest22dialogue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
