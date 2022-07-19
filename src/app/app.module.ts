import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { ComicOverviewComponent } from './components/comics/comic-overview/comic-overview.component';
import { ContentFunctionalityService } from './services/content-functionality.service';
import { CharacterOverviewComponent } from './components/characters/character-overview/character-overview.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatorsComponent } from './components/creator/creators/creators.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SeriesOverviewComponent } from './components/series/series-overview/series-overview.component';
import { StoryOverviewComponent } from './components/stories/story-overview/story-overview.component';
import { CreatorOverviewComponent } from './components/creator/creator-overview/creator-overview.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { ComicComponent } from './components/comics/comic/comic.component';
import { SerieesComponent } from './components/series/seriees/seriees.component';
import { CreatorComponent } from './components/creator/creator.component';
import { StoryComponent } from './components/stories/story/story.component';
import { EventComponent } from './components/event/event.component';
import { EventsComponent } from './components/event/events/events.component';
import { EventOverviewComponent } from './components/event/event-overview/event-overview.component';
import { SearchPipe } from './pipes/search.pipe';
import { SharedLayoutComponent } from './components/shared-layout/shared-layout.component';
import { MarvelDataPlaceholderComponent } from './components/marvel-data-placeholder/marvel-data-placeholder.component';
import { MarvelOverviewComponent } from './components/marvel-overview/marvel-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    FilterPipe,
    ComicOverviewComponent,
    CharacterOverviewComponent,
    HomeComponent,
    FooterComponent,
    CreatorsComponent,
    CreatorComponent,
    StoriesComponent,
    SeriesOverviewComponent,
    StoryOverviewComponent,
    CreatorOverviewComponent,
    CharacterComponent,
    ComicComponent,
    SerieesComponent,
    StoryComponent,
    EventComponent,
    EventsComponent,
    EventOverviewComponent,
    SearchPipe,
    SharedLayoutComponent,
    MarvelDataPlaceholderComponent,
    MarvelOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ContentFunctionalityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
