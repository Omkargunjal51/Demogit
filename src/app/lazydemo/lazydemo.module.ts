import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazydemoRoutingModule } from './lazydemo-routing.module';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazydemoRoutingModule
  ]
})
export class LazydemoModule { }
