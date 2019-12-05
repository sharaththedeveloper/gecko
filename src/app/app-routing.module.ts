import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
 { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) }, 
 { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
 { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
