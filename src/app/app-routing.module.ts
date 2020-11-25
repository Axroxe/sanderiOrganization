import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/client/client.module').then(m => m.ClientPageModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('./components/pages/admin/admin.module').then( m => m.AdminPageModule),
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: true  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
