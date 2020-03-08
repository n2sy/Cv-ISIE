import {Routes, RouterModule} from '@angular/router'
import { CvComponent } from './cv/cv.component'
import { CouleurComponent } from './couleur/couleur.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';

const routes : Routes = [
 {path : '', component:HomeComponent},
 {path:'cv', component:CvComponent},
 {path:'color', component:CouleurComponent},
 {path:'word', component:MiniWordComponent},
 {path:'child', component:ChildComponent},
 {path:'cv/:id', component:InfosComponent}

]

export const ROUTING = RouterModule.forRoot(routes);