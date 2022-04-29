import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicByHeroComponent } from './comic-by-hero/comic-by-hero.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ComicOverviewComponent } from './comic-overview/comic-overview.component';
import { ContentFunctionalityService } from './services/content-functionality.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    ComicByHeroComponent,
    FilterPipe,
    ComicOverviewComponent,
  ],
  entryComponents: [ComicByHeroComponent],
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
