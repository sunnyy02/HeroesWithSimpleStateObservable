import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroesComponent } from "./heroes.component";

@NgModule({
  imports: [
    SharedModule,
    HeroesRoutingModule,
  ],
  declarations: [HeroesComponent],
  providers: [],
})
export class HeroesModule { } 