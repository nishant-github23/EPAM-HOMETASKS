import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input () user:any={};
@Input () type:any="";

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigate(["manage/"+this.user.id])
  }

}
