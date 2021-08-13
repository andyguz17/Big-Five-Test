import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'openness',
    loadChildren: () =>
      import('./pages/openness/openness.module').then((m) => m.OpennessModule),
  },
  {
    path: 'conscientiousness',
    loadChildren: () =>
      import('./pages/conscientiousness/conscientiousness.module').then(
        (m) => m.ConscientiousnessModule
      ),
  },
  {
    path: 'extraversion',
    loadChildren: () =>
      import('./pages/extraversion/extraversion.module').then(
        (m) => m.ExtraversionModule
      ),
  },
  {
    path: 'agreeableness',
    loadChildren: () =>
      import('./pages/agreeableness/agreeableness.module').then(
        (m) => m.AgreeablenessModule
      ),
  },
  {
    path: 'neuroticism',
    loadChildren: () =>
      import('./pages/neuroticism/neuroticism.module').then(
        (m) => m.NeuroticismModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
