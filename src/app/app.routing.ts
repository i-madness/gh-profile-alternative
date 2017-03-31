import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GhProfile } from './components/ghprofile/ghprofile.component';
import { RepositoryContainer } from './components/ghprofile/repos/repos.component';
import { StarsContainer } from './components/ghprofile/stars/stars.component';
import { FollowersContainer } from './components/ghprofile/followers/followers.component';
import { FollowingContainer } from './components/ghprofile/following/following.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'profile/:username', 
    component: GhProfile,
    children: [
      {
        path: 'repos',
        component: RepositoryContainer
      },
      {
        path: 'stars',
        component: StarsContainer
      },
      {
        path: 'followers',
        component: FollowersContainer
      },
      {
        path: 'following',
        component: FollowingContainer
      },
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
