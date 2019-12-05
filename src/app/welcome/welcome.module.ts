import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
  WelcomeComponent,

],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModule
  ]
})
export class WelcomeModule { }
