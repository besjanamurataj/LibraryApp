
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerLibraryComponent } from '../manager-library/manager-library.component';

const routes: Routes = [
  {path:'',component:ManagerLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
