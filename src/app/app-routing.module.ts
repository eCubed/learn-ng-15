import { ChangesComponent } from './pages/changes/changes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'changes', component: ChangesComponent, pathMatch: 'full'},
  { path: 'dynamics', component: DynamicsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
