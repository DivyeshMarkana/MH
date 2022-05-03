import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicOverviewComponent } from './comics/comic-overview/comic-overview.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorOverviewComponent } from './creator/creator-overview/creator-overview.component';
import { CreatorComponent } from './creator/creator/creator.component';
import { HomeComponent } from './home/home.component';
import { SeriesOverviewComponent } from './series/series-overview/series-overview.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryOverviewComponent } from './stories/story-overview/story-overview.component';

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
