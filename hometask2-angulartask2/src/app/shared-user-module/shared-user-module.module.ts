import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AppRoutingModule } from '../app-routing.module';
import { ManageRoutingModule } from '../manage/manage-routing.module';

@NgModule({
  declarations: 
  [UserlistComponent,
  UserComponent,
  UserdetailComponent],
  imports: [
    CommonModule,
   ManageRoutingModule
  ],
  exports:[
    UserlistComponent,
 ],

    providers:[UsersService]
})
export class SharedUserModuleModule { }
