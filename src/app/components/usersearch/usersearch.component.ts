import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubApiService } from '../../services/gh-api.service';
import { debounce } from 'lodash';

/**
 * Autocomplete-поиск пользователей GitHub
 */
@Component({
    selector: 'user-search',
    templateUrl: './usersearch.component.html', 
    styleUrls: ['./usersearch.component.scss']
})
export class UserSearchAutocomplete {
    autocompleteControl = new FormControl()
    val: String
    options: any
    resultsAmount = window.screen.width > 1090 ? 14 : 12
    delayedKeyUp = debounce(this.inputKeyUp, 400)
    
    constructor(private githubApiService: GithubApiService) { }    

    inputKeyUp() {
        if (this.val) {
            this.githubApiService.findUsersByQuery(this.val)
                .then((result: any) => {
                    this.options = result.json().items.slice(0, this.resultsAmount);
                    this.options.forEach((element: any) => {
                        if (element.login.length > 12) {
                            element.login = element.login.slice(0, 10) + '...'
                        }
                    });
                })
        }
    }

}
