import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
    .then(mod => mod.ContactModule)
},
  { path: 'about', 
    loadChildren: () => import('./modules/general/about/about.module')
    .then(mod => mod.AboutModule)
},
  { path: 'signin', 
    loadChildren: () => import('./modules/general/signin/signin.module')
    .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
