import { MaterialModule } from './../../../material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';


@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    MaterialModule
  ]
})
export class IssuesModule { }
