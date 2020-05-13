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
import { CvpersonneService } from './cvpersonne.service';
import { LoginComponent } from './login/login.component';
import { SpinnerLoadingComponent } from './spinner-loading/spinner-loading.component';
import { AlertComponent } from './alert/alert.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './login.interceptor';
import { SearchComponent } from './search/search.component';

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
    InfosComponent,
    LoginComponent,
    SpinnerLoadingComponent,
    AlertComponent,
    AddComponent,
    UpdateComponent,
    NotFoundComponent,
    HttpComponent,
    SearchComponent
  ],
  imports: [
BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
