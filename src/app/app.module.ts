import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { ContentFunctionalityService } from './services/content-functionality.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
import { SharedLayoutComponent } from './components/shared-layout/shared-layout.component';
import { MarvelDataPlaceholderComponent } from './components/marvel-data-placeholder/marvel-data-placeholder.component';
import { MarvelOverviewComponent } from './components/marvel-overview/marvel-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    HomeComponent,
    FooterComponent,
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
