import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../../services/gh-api.service'

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html',
})
export class StarsContainer implements OnInit {
    constructor(private route: ActivatedRoute, private ghApiService: GithubApiService) { }

    ngOnInit() {
        console.log(this.route)
        console.log(this.ghApiService)
    }
}