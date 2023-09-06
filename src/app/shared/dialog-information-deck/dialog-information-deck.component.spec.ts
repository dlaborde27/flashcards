import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformationDeckComponent } from './dialog-information-deck.component';

describe('DialogInformationDeckComponent', () => {
  let component: DialogInformationDeckComponent;
  let fixture: ComponentFixture<DialogInformationDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInformationDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInformationDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
