import { NgModule } from "@angular/core";
/* import { InlineEditorModule } from "@qontu/ngx-inline-editor"; */
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../in-memory-data.service";
import { CommonModule } from "@angular/common";

const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  //Interesting modules :-)
  /*  InlineEditorModule, */
];
const SHARED_COMPONENTS: any[] = [];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  declarations: SHARED_COMPONENTS,
})
export class SharedModule { }