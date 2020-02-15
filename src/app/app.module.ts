import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CouleurComponent } from './couleur/couleur.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    CouleurComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
