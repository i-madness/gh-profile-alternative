import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service';
import ApplicationUtils from '../../../services/utils'
import { LANGUAGE_ICONS } from '../../../services/lang-icons'
import * as moment from 'moment';

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
})
export class OverviewContainer implements OnInit {
    username: String;
    commits: Array<any>;
    repos: any;
    curMonth: String;

    constructor(private route: ActivatedRoute, private githubApiService: GithubApiService) { 
        moment.locale('ru');
        this.curMonth = moment().format("MMMM");
    }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.username = params["username"];
            this.githubApiService.fetchCommits(this.username)
                .then(commits => {
                    this.repos = commits.shift();
                    console.log(commits.map(cmt => cmt.json()))
                    this.commits = commits
                        .map((commit, index) => {
                            let json = commit.json();
                            json.forEach(element => {
                                element['repo'] = this.repos[index];
                                element['langIcon'] = LANGUAGE_ICONS[element.repo.language];
                                element['timestamp'] = moment(element.commit.author.date).format("D MMMM, HH:mm");
                                element.commit.message = ApplicationUtils.removeEmojiSigns(element.commit.message)
                            });
                            return json;
                        })
                        .reduce((prev, next) => [...prev, ...next], [])
                        .sort((a, b) => - (moment(a.commit.author.date).unix() -  moment(b.commit.author.date).unix()));
                });
        });
    }

}