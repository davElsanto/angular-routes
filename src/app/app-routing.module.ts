import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HOME_ROUTES } from './home/home.router';


const routes: Routes = [
  { path : 'home/:name' , component : HomeComponent, children: HOME_ROUTES},
  { path : '**', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
