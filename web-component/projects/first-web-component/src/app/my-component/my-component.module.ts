import { NgModule } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { MyComponentComponent } from "./my-component.component";
import { routes } from "./my-component.routes";
import { PageAComponent } from "./page-a/page-a.component";
import { PageBComponent } from "./page-b/page-b.component";
import { HttpClientModule } from '@angular/common/http';
import { MyComponentService } from "./my.component.service";


@NgModule({
  imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
  declarations: [MyComponentComponent, PageAComponent, PageBComponent],
  providers: [MyComponentService],
  exports: [MyComponentComponent]
})
export class MyComponentModule {

}
