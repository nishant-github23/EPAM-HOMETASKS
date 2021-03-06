import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { SharedUserModuleModule } from '../shared-user-module/shared-user-module.module';

@NgModule({
  declarations: [
    ManageComponent,

  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedUserModuleModule
  ]
})
export class ManageModule { }
