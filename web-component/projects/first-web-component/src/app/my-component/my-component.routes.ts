import { Routes, ROUTES } from "@angular/router";
import { PageAComponent } from "./page-a/page-a.component";
import { PageBComponent } from "./page-b/page-b.component";

export const routes: Routes = [
  {path: 'a', component: PageAComponent, outlet: 'my-component'},
  {path: 'b', component: PageBComponent, outlet: 'my-component'},
  {path: '**', redirectTo: 'a', pathMatch: 'full'}
];
