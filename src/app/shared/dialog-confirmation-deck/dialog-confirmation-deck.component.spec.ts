import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationDeckComponent } from './dialog-confirmation-deck.component';

describe('DialogConfirmationDeckComponent', () => {
  let component: DialogConfirmationDeckComponent;
  let fixture: ComponentFixture<DialogConfirmationDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmationDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
