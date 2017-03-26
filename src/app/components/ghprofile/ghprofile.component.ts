import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GithubApiService } from '../../services/gh-api.service'
import { ProfileResponse } from '../../services/response-models'
import 'rxjs/add/operator/switchMap';

/**
 * Компонент, в котором отображаются данные о пользователе GitHub
 */
@Component({
    selector: 'gh-profile',
    templateUrl: './ghprofile.component.html',
    styleUrls: ['./ghprofile.component.scss']
})
export class GhProfile implements OnInit {
    user = new ProfileResponse()

    constructor(
        private githubApiService: GithubApiService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.githubApiService.fetchUserData(params['username']))
            .subscribe((response: any) => this.user = response.json())
    }

    goBack() {
        this.location.back();
    }

}