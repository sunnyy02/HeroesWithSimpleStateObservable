import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroDetailRoutingModule } from "./hero-detail-routing.module";

@NgModule({
  imports: [
    SharedModule,
    HeroDetailRoutingModule,
  ],
  declarations: [HeroDetailComponent],
  providers: [],
})
export class HeroDetailModule { } 