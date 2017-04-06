import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GhProfile } from './components/ghprofile/ghprofile.component';
import { RepositoryContainer } from './components/ghprofile/repos/repos.component';
import { StarsContainer } from './components/ghprofile/stars/stars.component';
import { FollowersContainer } from './components/ghprofile/followers/followers.component';
import { OverviewContainer } from './components/ghprofile/overview/overview.component';
import { FollowingContainer } from './components/ghprofile/following/following.component';
import { UserSearchAutocomplete } from './components/usersearch/usersearch.component';
import { GithubApiService } from './services/gh-api.service';
import { routing } from './app.routing';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    routing,
  ],
  declarations: [
    AppComponent,
    GhProfile,
    RepositoryContainer,
    StarsContainer,
    FollowersContainer,
    FollowingContainer,
    OverviewContainer,
    UserSearchAutocomplete
  ],
  providers: [
    GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
