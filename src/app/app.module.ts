import { MyRoutes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WallComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
