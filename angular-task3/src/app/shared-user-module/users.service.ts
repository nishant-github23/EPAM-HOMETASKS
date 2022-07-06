import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    users =[
      { id:"user1","firstName":"Nishant",lastName:"Sharma",age: 22,"login": "Nish1",password:"xyz22",isDeleted: false},
      { id:"user2","firstName":"Mohit",lastName:"Sharma",age: 29,"login": "Mohi1",password:"xyz22",isDeleted: true},
      { id:"user3","firstName":"darsh",lastName:"Sharma",age: 27,"login": "Dars1",password:"xyz22",isDeleted: false},
      { id:"user4","firstName":"Nitin",lastName:"kumar",age: 25,"login": "Nitin1",password:"xyz22",isDeleted: true},
      { id:"user5","firstName":"Rashi",lastName:"Tomar",age: 22,"login": "Rash1",password:"xyz22",isDeleted: false},
      { id:"user6","firstName":"Pooja",lastName:"Panwar",age: 21,"login": "Pooj1",password:"xyz22",isDeleted: false},
    ]
  constructor() { }
  getusers(state:boolean){
    return this.users.filter((x:any)=>x.isDeleted===state)
  }
  getallusers(){
    return this.users
  }
  getuserbyid(id:string){
    return this.users.find((x:any)=>x.id===id)
  }
}
