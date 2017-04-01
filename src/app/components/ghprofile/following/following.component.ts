import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'

@Component({
    selector: 'following',
    templateUrl: './following.component.html',
})
export class FollowingContainer implements OnInit {
    subs: any;

    constructor(private route: ActivatedRoute, private ghApiService: GithubApiService) { }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            let username = params["username"];
            this.ghApiService.fetchUserSubscriprions(username)
                .then((response: any) => {
                    this.subs = response.json();
                    this.subs.forEach((element: any) => {
                        if (element.login.length > 12) {
                            element.login = element.login.slice(0, 10) + '...'
                        }
                    });
                })
        });
    }
}