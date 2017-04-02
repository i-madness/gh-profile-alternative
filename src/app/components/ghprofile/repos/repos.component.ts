import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'
import { LANGUAGE_ICONS } from '../../../services/lang-icons'

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
                        let emojis: Array<String> = repo.description.match(/\:[a-z_]*\:/ig);
                        emojis && emojis.forEach(emoji => {
                            repo.description = repo.description.replace(emoji, ``)
                        })
                    });
                })
        });
    }
}