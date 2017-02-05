import { MyRoutes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';
import { GuestComponent } from './guest/guest.component';
import { ProfileComponent } from './user/profile.component';
import { OffsComponent } from './user/offs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WallComponent,
    GuestComponent,
    ProfileComponent,
    OffsComponent
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
