import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdownComponent } from './listdown/listdown.component';

const routes: Routes=[
  {path:'data', component:ListdownComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
