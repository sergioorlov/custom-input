import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HA_ROUTE_CONFIGS} from "./const/route.const";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: HA_ROUTE_CONFIGS['reactive'].path,
        pathMatch: 'prefix',
      },
      {
        path: HA_ROUTE_CONFIGS['reactive'].path,
        loadChildren: () => import('./pages/reactive/reactive.module').then(m => m.ReactiveModule),
      },
      {
        path: HA_ROUTE_CONFIGS['templateDriven'].path,
        loadChildren: () => import('./pages/template-driven/template-driven.module').then(m => m.TemplateDrivenModule),
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
