import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes.component";

const routes: Routes = [
  { path: '', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HeroesRoutingModule { }