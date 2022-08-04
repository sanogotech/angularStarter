import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonheaderComponent } from './components/commonheader/commonheader.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: CommonheaderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
