import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OnlyForScreenDirective } from "./onlyForScreen.directive";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, OnlyForScreenDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
