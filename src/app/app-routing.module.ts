import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpennessComponent } from './pages/openness/openness.component';

const routes: Routes = [
  { path: 'openness', component: OpennessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
