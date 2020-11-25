import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./organization/organization.module').then( m => m.OrganizationPageModule)
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.module').then( m => m.OrganizationPageModule)
      },
      {
        path: 'programs',
        loadChildren: () => import('./program/program.module').then( m => m.ProgramPageModule)
      },
      {
        path: 'editorial',
        loadChildren: () => import('./editorial/editorial.module').then( m => m.EditorialPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
