import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicOverviewComponent } from './comic-overview/comic-overview.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'marvel', pathMatch: 'full'
  },
  {
    path: 'marvel', component: HomeComponent
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'character-detail/:id', component: CharacterOverviewComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'comic-overview/:id', component: ComicOverviewComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
