import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CookieService, CookieOptions } from 'angular2-cookie/core';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
// **Student code change starts**
import { NamesComponent } from "./names/names.component";
import { NamesService } from "./names.service";
// **Student code change ends**

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    // **Student code change starts**
    NamesComponent
    // **Student code change ends**
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, NamesService, CookieService, {provide: CookieOptions, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
