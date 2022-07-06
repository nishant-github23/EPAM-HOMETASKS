import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let userdata =[
    { id:"user1","firstName":"Nishant",lastName:"Sharma",age: 22,"login": "Nish1",password:"xyz22",isDeleted: false},
    { id:"user2","firstName":"Mohit",lastName:"Sharma",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: true},
    { id:"user3","firstName":"darsh",lastName:"Sharma",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},
    { id:"user4","firstName":"Nitin",lastName:"kumar",age: 25,"login": "Nitin1",password:"xyz22",isDeleted: true},
    { id:"user5","firstName":"Rashi",lastName:"Tomar",age: 22,"login": "Rash1",password:"xyz22",isDeleted: false},
    { id:"user6","firstName":"Pooja",lastName:"Panwar",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: false},
  ]
  let sampeluser ={id:"user1","firstName":"Nishant",lastName:"Sharma",age: 22,"login": "Nish1",password:"xyz22",isDeleted: false}
  let sampleuserid="user1"
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getallusers should ,by default,return an object array', () => {
    expect(service.getallusers()).toEqual(userdata);
  });

  it('getuserbyid should ,return an object of user details', () => {
  expect(service.getuserbyid(sampleuserid)).toEqual(sampeluser); 
  });

});
