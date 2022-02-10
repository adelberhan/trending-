import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetilsComponent } from './moviedetils/moviedetils.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfondComponent } from './notfond/notfond.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegesterComponent } from './regester/regester.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: 'movie', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'network', canActivate: [AuthGuard], component: NetworkComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },
  { path: 'moviedetils/:movieId', canActivate: [AuthGuard], component: MoviedetilsComponent },
  { path: 'regester', component: RegesterComponent },
  { path: 'pepole', canActivate: [AuthGuard], component: PepoleComponent },
  { path: '*', component: NotfondComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
