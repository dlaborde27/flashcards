import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateTopicComponent } from './dialog-update-topic.component';

describe('DialogUpdateTopicComponent', () => {
  let component: DialogUpdateTopicComponent;
  let fixture: ComponentFixture<DialogUpdateTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
