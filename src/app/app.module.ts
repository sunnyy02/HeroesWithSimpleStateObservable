import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/messages.module';
import { HeroStore } from './hero.store';
import { HeroApiService } from './hero.api.service';


@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
    MessageModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [HeroStore, HeroApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
