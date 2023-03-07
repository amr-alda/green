import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quest21dialogue1Component } from './quest21dialogue1.component';

describe('Quest21dialogue1Component', () => {
  let component: Quest21dialogue1Component;
  let fixture: ComponentFixture<Quest21dialogue1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Quest21dialogue1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quest21dialogue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
