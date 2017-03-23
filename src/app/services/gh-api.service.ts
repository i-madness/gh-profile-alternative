import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubApiService {
    constructor (private http: Http) {}

    fetchUserData(userName: String): Promise<Object> {
        return this.http.get(`https://api.github.com/users/${userName}`).toPromise();
    }
}
