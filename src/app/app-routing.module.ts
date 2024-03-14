  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { EmployeeListComponent } from './employee-list/employee-list.component';
  import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { EditComponent } from './edit/edit.component';

  const routes: Routes = [
    {path: '', redirectTo :'list' ,pathMatch:"full"}
,

    {path  : 'list', component : EmployeeListComponent}


  , {path : 'list/add',component : AddOrEditComponent}


    ,{path :'edit/:id' ,component : EditComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
