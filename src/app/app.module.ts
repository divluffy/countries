import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import {
  AppComponent,
  NavComponent,
  SearchComponent,
  CardComponent,
  PageinfoComponent,
  HomeComponent,
  Page404Component,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    CardComponent,
    PageinfoComponent,
    HomeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
