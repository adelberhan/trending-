import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { PepoleComponent } from './pepole/pepole.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { RegesterComponent } from './regester/regester.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfondComponent } from './notfond/notfond.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviedetilsComponent } from './moviedetils/moviedetils.component';

@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    MoviesComponent,
    HomeComponent,
    PepoleComponent,
    AboutComponent,
    NetworkComponent,
    RegesterComponent,
    LoginComponent,
    NavbarComponent,
    NotfondComponent,
    HomeheaderComponent,
    MoviedetilsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
