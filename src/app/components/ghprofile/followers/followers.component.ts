import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'

/**
 * http://stackoverflow.com/questions/34906888/angular-2-access-parent-routeparams-from-child-component
 */
@Component({
    selector: 'followers',
    templateUrl: './followers.component.html',
})
export class FollowersContainer implements OnInit {
    followers: any;

    constructor(private route: ActivatedRoute, private ghApiService: GithubApiService) { }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            let username = params["username"];
            this.ghApiService.fetchUserFollowers(username)
                .then((response: any) => {
                    this.followers = response.json();
                    this.followers.forEach((element: any) => {
                        if (element.login.length > 12) {
                            element.login = element.login.slice(0, 10) + '...'
                        }
                    });
                })
        });
    }
}