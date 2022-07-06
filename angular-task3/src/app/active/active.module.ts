import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { SharedUserModuleModule } from '../shared-user-module/shared-user-module.module';




@NgModule({
  declarations: [
    ActiveusersComponent ],
  imports: [
    CommonModule,
    SharedUserModuleModule
  ],
  exports:  [ActiveusersComponent]
})
export class ActiveModule { }
