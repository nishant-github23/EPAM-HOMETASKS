import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveusersComponent } from './active/activeusers/activeusers.component';
import { DeletedusersComponent } from './deleted/deletedusers/deletedusers.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '',
   redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'active',
  component: ActiveusersComponent
},
{
  path:"delete",
  component:DeletedusersComponent
},

{ path: 'manage', 
  loadChildren: () => import('./manage/manage.module')
  .then(m => m.ManageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
