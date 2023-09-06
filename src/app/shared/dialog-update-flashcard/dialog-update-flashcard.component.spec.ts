import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateFlashcardComponent } from './dialog-update-flashcard.component';

describe('DialogUpdateFlashcardComponent', () => {
  let component: DialogUpdateFlashcardComponent;
  let fixture: ComponentFixture<DialogUpdateFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateFlashcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
