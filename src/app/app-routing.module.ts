import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterOverviewComponent } from './components/characters/character-overview/character-overview.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicOverviewComponent } from './components/comics/comic-overview/comic-overview.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CreatorOverviewComponent } from './components/creator/creator-overview/creator-overview.component';
import { CreatorsComponent } from './components/creator/creators/creators.component';
import { EventOverviewComponent } from './components/event/event-overview/event-overview.component';
import { EventsComponent } from './components/event/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesOverviewComponent } from './components/series/series-overview/series-overview.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryOverviewComponent } from './components/stories/story-overview/story-overview.component';

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
    path: 'creator', component: CreatorsComponent
  },
  {
    path: 'creator/:id', component: CreatorOverviewComponent
  },
  {
    path: 'events', component: EventsComponent
  },
  {
    path: 'event/:id', component: EventOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
