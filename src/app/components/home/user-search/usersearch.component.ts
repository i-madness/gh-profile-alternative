import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubApiService } from '../../../services/gh-api.service'

/**
 * Autocomplete-поиск пользователей GitHub
 */
@Component({
    selector: 'user-search',
    templateUrl: './usersearch.component.html',
})
export class UserSearchAutocomplete {
    autocompleteControl = new FormControl()
    val: String
    options: String
    constructor(private githubApiService: GithubApiService) { }

    modelChg() {
        if (this.val) {
            this.githubApiService.findUsersByQuery(this.val)
                .then((result: any) => {
                    this.options = result.json().items
                })
        }
    }

}
