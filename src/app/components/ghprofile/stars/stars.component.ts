import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'
import { LANGUAGE_ICONS } from '../../../services/lang-icons'

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html',
})
export class StarsContainer implements OnInit {
    stars: any;

    constructor(private route: ActivatedRoute, private ghApiService: GithubApiService) { }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            let username = params["username"];
            this.ghApiService.fetchUsersStars(username)
                .then((response: any) => {
                    this.stars = response.json();
                    this.stars.forEach(repo => {
                        repo["langIcon"] = LANGUAGE_ICONS[repo.language]
                        if (repo.description) {
                            let emojis: Array<String> = repo.description.match(/\:[a-z_]*\:/ig);
                            emojis && emojis.forEach(emoji => {
                                repo.description = repo.description.replace(emoji, ``)
                            })
                        }
                    });
                })
        });
    }
}