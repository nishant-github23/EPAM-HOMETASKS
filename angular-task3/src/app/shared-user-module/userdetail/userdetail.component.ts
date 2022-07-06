import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
user:any={}
id:any;
constructor( private route2 :ActivatedRoute,private _users:UsersService){
}

ngOnInit(): void {
  this.route2.params.subscribe(params=>{
    this.id = params['id'];
    this.user=this._users.getuserbyid(this.id)
})
}}
