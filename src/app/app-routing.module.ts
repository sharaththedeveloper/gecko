import { UserComponent } from './user/user.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
 { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) }, 
 { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
 { path: 'user', component:UserComponent ,children:[
  { path: '', loadChildren: () => import('./user/home/home.module').then(m => m.HomeModule) },
  { path: 'project', loadChildren: () => import('./user/project/project.module').then(m => m.ProjectModule) },
 ] },
 


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
