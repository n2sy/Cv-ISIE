import {Routes, RouterModule} from '@angular/router'
import { CvComponent } from './cv/cv.component'
import { CouleurComponent } from './couleur/couleur.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes : Routes = [
    {path :'', component:HomeComponent},
    {path:'cv', children: [
        {path:'', component:CvComponent},
        {path:'add', component: AddComponent},
        {path:'edit/:id', component: UpdateComponent},
        {path:':id', component:InfosComponent},
    ]},
    {path:'color', component:CouleurComponent},
    {path:'word', component:MiniWordComponent},
    {path:'child', component:ChildComponent},
    {path:'login', component:LoginComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}

]

export const ROUTING = RouterModule.forRoot(routes);