import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'buscador', pathMatch: 'full' },
  { path: 'buscador', component: WikiSearchComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
