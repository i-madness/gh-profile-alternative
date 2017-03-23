import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/**
 * REST-клиент для GitHub API
 */
@Injectable()
export class GithubApiService {
    constructor (private http: Http) {}

    /**
     * Запрос на получение данных заданного пользователя
     * @param userName имя пользователя (в API соответствует полю login)
     */
    fetchUserData(userName: String): Promise<Object> {
        return this.http.get(`https://api.github.com/users/${userName}`).toPromise();
    }

    /**
     * Запрос списка пользователей, имя которых начинается на заданную строку 
     * @param query строка запроса
     */
    findUsersByQuery(query: String): Promise<Object> {
        return this.http.get(`https://api.github.com/search/users?q=${query}`).toPromise();
    }
}
