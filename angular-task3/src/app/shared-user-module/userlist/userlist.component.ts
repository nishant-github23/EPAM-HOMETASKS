import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { multicast } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
  users:any;
  @Input() item:any=null;
  
  constructor(private _users:UsersService) { }
  ngOnInit(): void {
    if (this.item===null){
      this.users=this._users.getallusers()
    }
    else{
      this.users=this._users.getusers(this.item)
    }
    }}
