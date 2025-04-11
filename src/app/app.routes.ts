import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

export const routes: Routes = [
  //{ path: '', component:  },
  { path: 'auth', component: AuthFormComponent },
  // 404 fallback route (opcionális)
  { path: '**', redirectTo: '' },
];
