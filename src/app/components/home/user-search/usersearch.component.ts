import { Component, OnInit } from '@angular/core';
//import { GithubApiService } from '../../../services/gh-api.service'

/**
 * Autocomplete-поиск пользователей GitHub
 */
@Component({
    selector: 'user-search',
    templateUrl: './usersearch.component.html',
})
export class UserSearchAutocomplete implements OnInit {
    val: String
    options = ["rrr", '3342', '42'];
    constructor(/*private githubApiService: GithubApiService,*/) { }

    ngOnInit() {

        console.log(this.val)
    }

    modelChg() {
        console.log(this.val)
    }

}
