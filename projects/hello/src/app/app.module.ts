import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FunkycasePipe } from './funkycase.pipe';
import { FoobarComponent } from './foobar/foobar.component';
import { BazComponent } from './baz/baz.component';

@NgModule({
  declarations: [
    AppComponent,
    FunkycasePipe,
    FoobarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
