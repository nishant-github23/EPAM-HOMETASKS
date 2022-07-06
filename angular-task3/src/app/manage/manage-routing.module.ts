import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from '../shared-user-module/userdetail/userdetail.component';
import { ManageComponent } from './manage.component';

const routes: Routes = [{ path: '', component: ManageComponent,
children: [
  {
    path:':id', component: UserdetailComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
