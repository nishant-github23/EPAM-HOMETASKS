import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let de : DebugElement;
  let sampleusers=[
    { id:"user1","firstName":"Nishant",lastName:"Sharma",age: 22,"login": "Nish1",password:"xyz22",isDeleted: false},
    { id:"user2","firstName":"Mohit",lastName:"Sharma",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: true},
    { id:"user3","firstName":"darsh",lastName:"Sharma",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},
    { id:"user4","firstName":"Nitin",lastName:"kumar",age: 25,"login": "Nitin1",password:"xyz22",isDeleted: true},
    { id:"user5","firstName":"Rashi",lastName:"Tomar",age: 22,"login": "Rash1",password:"xyz22",isDeleted: false},
    { id:"user6","firstName":"Pooja",lastName:"Panwar",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: false},
  ]
  let  Activeuserdata =[
   { id:"user1","firstName":"Nishant",lastName:"Sharma",age: 22,"login": "Nish1",password:"xyz22",isDeleted: false},
    { id:"user2","firstName":"Mohit",lastName:"Sharma",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: false},
    { id:"user3","firstName":"darsh",lastName:"Sharma",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},

  ]
  let deactiveduserlist=[
    { id:"user4","firstName":"Nitin",lastName:"kumar",age: 25,"login": "Nitin1",password:"xyz22",isDeleted: true},
    { id:"user5","firstName":"Rashi",lastName:"Tomar",age: 22,"login": "Rash1",password:"xyz22",isDeleted: true},
    { id:"user6","firstName":"Pooja",lastName:"Panwar",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: true},
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    de=fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('OnInit Hook ,fetch Active users list', () => {
  //   component.item=false
  //   fixture.detectChanges();
  //   component.ngOnInit()
  //   expect(component.users).toEqual(Activeuserdata)
  // });

  // it('OnInit Hook ,fetch Deactive users list', () => {
  //   component.item=true
  //   fixture.detectChanges();
  //   component.ngOnInit()
  //   expect(component.users).toEqual(deactiveduserlist)
  // });

  it('OnInit Hook ,fetch All users list', () => {
    expect(component.users).toEqual(sampleusers)
  });
});

