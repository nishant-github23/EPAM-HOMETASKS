import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedusersComponent } from './deletedusers.component';

describe('DeletedusersComponent', () => {
  let component: DeletedusersComponent;
  let fixture: ComponentFixture<DeletedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders an independent component Userlist', () => {
    const { debugElement } = fixture;
    const counter = debugElement.nativeElement.querySelector('app-userlist');
    expect(counter).toBeTruthy();
  });
});
