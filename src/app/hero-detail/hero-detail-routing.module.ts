import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroDetailComponent } from "./hero-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: ":id", component: HeroDetailComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HeroDetailRoutingModule { }