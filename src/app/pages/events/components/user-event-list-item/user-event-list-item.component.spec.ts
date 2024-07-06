import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventListItemComponent } from './user-event-list-item.component';

describe('UserEventListItemComponent', () => {
  let component: UserEventListItemComponent;
  let fixture: ComponentFixture<UserEventListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEventListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
