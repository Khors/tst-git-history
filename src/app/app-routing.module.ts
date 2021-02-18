import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './pages/commits/commits.component';

const routes: Routes = [
  { path: '', redirectTo: 'commits', pathMatch: 'full' },
  { path: 'commits', component: CommitsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    CommitsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
