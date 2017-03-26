import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/gh-api.service'
import { Response } from '@angular/http/index'
import { ProfileResponse } from '../../services/response-models'

/**
 * Компонент основного роута приложения, в котором осуществляются все его основные функции
 */
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  data = new ProfileResponse()
  constructor(private githubApiService: GithubApiService) {}

  ngOnInit() {
    this.githubApiService.fetchUserData('i-madness')
      .then((response: Response) => {
        this.data = response.json()
      });
  }

}
