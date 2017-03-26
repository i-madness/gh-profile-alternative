import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GhProfile } from './components/ghprofile/ghprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:username', component: GhProfile }
];

export const routing = RouterModule.forRoot(routes);
