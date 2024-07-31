import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ass16Component } from './ass-16/ass-16.component';
import { FooterComponent } from './footer/footer.component';
import { Ass12Component } from './ass-12/ass-12.component';
import { FirstComponent } from './ass-12/first/first.component';
import { SecondComponent } from './ass-12/second/second.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { LoginComponent } from './guardDemo/login/login.component';
import { UserComponent } from './guardDemo/user/user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DemoMaterialComponent } from './Material/demo-material/demo-material.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // Voeg dit toe
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'; // Import MatSortModule





@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    Ass16Component,
    FooterComponent,
    Ass12Component,
    FirstComponent,
    SecondComponent,
    CardviewComponent,
    ListviewComponent,
    LoginComponent,
    UserComponent,
    DemoMaterialComponent  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //material
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSortModule
    
    
  ],
  providers: [
    
    provideClientHydration(),
         provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
