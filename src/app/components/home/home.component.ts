import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/gh-api.service'
import { Response } from '@angular/http/index'
// import { ProfileResponse } from './profile.response'

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  data
  login
  constructor(private githubApiService: GithubApiService) {}

  ngOnInit() {
    this.githubApiService.fetchUserData('i-madness')
      .then((response: Response) => {
        this.login = response.json().login
      });
    console.log('Hello Home');
  }

}
