import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './components/myform/myform.component';


const routes: Routes = [
  { path: 'myform', component: MyformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
