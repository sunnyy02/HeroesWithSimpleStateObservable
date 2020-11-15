import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MessagesComponent } from "./messages.component";
import { MessageService } from "./messages.service";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  providers: [MessageService],
})
export class MessageModule { } 