import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedusersComponent } from './deletedusers/deletedusers.component';
import { SharedUserModuleModule } from '../shared-user-module/shared-user-module.module';



@NgModule({
  declarations: [
    DeletedusersComponent,
   
  ],
  imports: [
    CommonModule,
    SharedUserModuleModule
  ],
  exports:[DeletedusersComponent]
})
export class DeletedModule { }
