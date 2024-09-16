import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PararoutComponent } from './pararout/pararout.component';
import { Ass16Component } from './ass-16/ass-16.component';
import { FirstComponent } from './ass-12/first/first.component';
import { SecondComponent } from './ass-12/second/second.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { LoginComponent } from './guardDemo/login/login.component';
import { UserComponent } from './guardDemo/user/user.component';
import { AuthGuard } from './guardDemo/auth.guard';
import { DemoMaterialComponent } from './Material/demo-material/demo-material.component';
import { ResponsiveNavComponent } from './responsive-nav/responsive-nav.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';


const routes: Routes = [
  {path:"ass16",component:Ass16Component},
  {path:"Child",component:ChildComponent},
  {path:"Parent",component:ParentComponent},
  {path:"Pararout/:id",component:PararoutComponent},
  {path:"lazydemo",loadChildren:()=>import('./lazydemo/lazydemo.module').then(n=>n.LazydemoModule)},
  { path: 'cust', loadChildren: () => import('./cust/cust.module').then(m => m.CustModule) },
  { path: 'p1', loadChildren: () => import('./p1/p1.module').then(m => m.P1Module) },
  {path:"first/:name",component:FirstComponent},
  {path:"second/:id",component:SecondComponent},
  {path:"cardview",component:CardviewComponent},
  {path:"listview",component:ListviewComponent,canActivate:[AuthGuard]},
  {path:"resp_nav",component:ResponsiveNavComponent},
  {
    path:"demopipe",component:DemoPipeComponent
  },

  {path:"login",component:LoginComponent},
  {path:"user",component:UserComponent},
  {path:"demomaterial",component:DemoMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
