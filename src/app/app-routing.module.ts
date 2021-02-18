import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './pages/commits/commits.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commits', component: CommitsComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    CommitsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
