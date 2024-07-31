import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P1RoutingModule } from './p1-routing.module';
import { P1Component } from './p1.component';


@NgModule({
  declarations: [
    P1Component
  ],
  imports: [
    CommonModule,
    P1RoutingModule
  ]
})
export class P1Module { }
