import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ManageRoutingModule } from '../manage/manage-routing.module';
import { UserFullnamePipe } from './Pipes/user-fullname.pipe';

@NgModule({
  declarations: 
  [UserlistComponent,
  UserComponent,
  UserdetailComponent,
  UserFullnamePipe],
  imports: [
    CommonModule,
   ManageRoutingModule,
  ],
  exports:[
    UserlistComponent,
 ],

    providers:[UsersService]
})
export class SharedUserModuleModule { }
