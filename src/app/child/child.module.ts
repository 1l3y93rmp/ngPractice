import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AAAComponent} from '../aaa/aaa.component';
import { ChildRoutingModule } from './child-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule
  ],
  declarations: [
    AAAComponent
  ]
})
export class ChildModule { }
