import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MarvelDataPlaceholderComponent } from './components/marvel-data-placeholder/marvel-data-placeholder.component';
import { MarvelOverviewComponent } from './components/marvel-overview/marvel-overview.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'characters/:id', component: MarvelOverviewComponent
  },
  {
    path: 'comics', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'comics/:id', component: MarvelOverviewComponent
  },
  {
    path: 'series', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'series/:id', component: MarvelOverviewComponent
  },
  {
    path: 'stories', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'stories/:id', component: MarvelOverviewComponent
  },
  {
    path: 'creators', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'creators/:id', component: MarvelOverviewComponent
  },
  {
    path: 'events', component: MarvelDataPlaceholderComponent
  },
  {
    path: 'events/:id', component: MarvelOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
