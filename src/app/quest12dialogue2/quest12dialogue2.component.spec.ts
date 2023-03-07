import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Quest12dialogue2Component } from './quest12dialogue2.component';

describe('Quest12dialogue2Component', () => {
  let component: Quest12dialogue2Component;
  let fixture: ComponentFixture<Quest12dialogue2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Quest12dialogue2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Quest12dialogue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
