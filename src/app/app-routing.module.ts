import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotyetComponent } from './notyet/notyet.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',     component: HomepageComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'signup',    component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notyet', component: NotyetComponent }  
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
