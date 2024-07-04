import { Routes } from '@angular/router';
import TypographyPageComponent from './pages/authentication/(authentication).page';
import { LandingComponent } from './pages/landing/landing.component';
import MusicPageComponent from './pages/music/(music).page';


export const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "login", component: TypographyPageComponent },
  { path: "register", component: TypographyPageComponent },
  { path: "music", component: MusicPageComponent },
];
