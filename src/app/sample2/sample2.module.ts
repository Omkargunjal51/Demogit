import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample2RoutingModule } from './sample2-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    Sample2RoutingModule
  ]
})
export class Sample2Module { }
