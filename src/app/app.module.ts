import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CouleurComponent } from './couleur/couleur.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { NoImagePipe } from './no-image.pipe';
import { RecruterComponent } from './recruter/recruter.component';
import { ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';


@NgModule({
  declarations: [
    AppComponent,
    CouleurComponent,
    ChildComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListeComponent,
    MiniWordComponent,
    CustomDirDirective,
    NoImagePipe,
    RecruterComponent,
    NavbarComponent,
    HomeComponent,
    InfosComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
