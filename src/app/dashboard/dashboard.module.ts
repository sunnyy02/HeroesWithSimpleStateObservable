import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [DashboardComponent, HeroSearchComponent],
  providers: [],
})
export class DashboardModule { } 