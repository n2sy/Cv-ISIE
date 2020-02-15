import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CouleurComponent } from './couleur/couleur.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component'

@NgModule({
  declarations: [
    AppComponent,
    CouleurComponent,
    ChildComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
