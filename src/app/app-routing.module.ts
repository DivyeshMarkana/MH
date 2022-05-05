import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicOverviewComponent } from './components/comics/comic-overview/comic-overview.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CreatorOverviewComponent } from './components/creator/creator-overview/creator-overview.component';
import { CreatorComponent } from './components/creator/creator/creator.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesOverviewComponent } from './components/series/series-overview/series-overview.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryOverviewComponent } from './stories/story-overview/story-overview.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'character/:id', component: CharacterOverviewComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'comic/:id', component: ComicOverviewComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: 'series/:id', component: SeriesOverviewComponent
  },
  {
    path: 'stories', component: StoriesComponent
  },
  {
    path: 'story/:id', component: StoryOverviewComponent
  },
  {
    path: 'creator', component: CreatorComponent
  },
  {
    path: 'creator/:id', component: CreatorOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
