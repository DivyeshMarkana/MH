import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { ComicOverviewComponent } from './components/comics/comic-overview/comic-overview.component';
import { ContentFunctionalityService } from './services/content-functionality.service';
import { CharacterOverviewComponent } from './characters/character-overview/character-overview.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatorComponent } from './components/creator/creator/creator.component';
import { StoriesComponent } from './stories/stories.component';
import { SeriesOverviewComponent } from './components/series/series-overview/series-overview.component';
import { StoryOverviewComponent } from './stories/story-overview/story-overview.component';
import { CreatorOverviewComponent } from './components/creator/creator-overview/creator-overview.component';



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
    CreatorComponent,
    StoriesComponent,
    SeriesOverviewComponent,
    StoryOverviewComponent,
    CreatorOverviewComponent
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
