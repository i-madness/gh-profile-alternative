import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'
import { LANGUAGE_ICONS } from '../../../services/lang-icons'
import ApplicationUtils from '../../../services/utils'

@Component({
    selector: 'repos',
    templateUrl: './repos.component.html',
})
export class RepositoryContainer implements OnInit {
    repositories: any;

    constructor(private route: ActivatedRoute, private ghApiService: GithubApiService) { }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            let username = params["username"];
            this.ghApiService.fetchUsersRepositories(username)
                .then((response: any) => {
                    this.repositories = response.json();
                    this.repositories.forEach(repo => {
                        repo["langIcon"] = LANGUAGE_ICONS[repo.language]
                        if (repo.description) {
                            repo.description = ApplicationUtils.removeEmojiSigns(repo.description)
                        }
                    });
                })
        });
    }
}